import { useState } from 'react';
import StatCard from '../../components/dashboard/StatCard';
import Pagination from '../../components/dashboard/Pagination';
// TODO: import { getInventory, updateVariantStock } from '../../api/staff.api';

const MOCK_KPIS = [
  { icon: 'inventory_2', label: 'จำนวน SKU ทั้งหมด', value: '1,248' },
  { icon: 'warning', label: 'แจ้งเตือนสต็อกต่ำ', value: '24', iconTone: 'error', note: '+3 จากเมื่อวาน', noteTone: 'up' },
  { icon: 'payments', label: 'มูลค่าสต็อกรวม', value: '$2.4M', iconTone: 'accent' },
  { icon: 'local_shipping', label: 'รอเติมสต็อก', value: '86' },
];

// สต็อกจริงต้องดึงจากตาราง product_variants (สต็อกอยู่ระดับ variant เสมอ ตาม PROJECT_STRUCTURE)
const MOCK_COLLECTIONS = [
  {
    name: 'แหวนอีเทอร์นิตี้',
    variants: [
      { sku: 'RG-ETB-050', name: 'แหวนอีเทอร์นิตี้คลาสสิก', color: 'โรสโกลด์', size: '5', price: '$1,250.00', stock: 14, hasImage: true },
      { sku: 'YG-ETB-060', name: 'แหวนอีเทอร์นิตี้คลาสสิก', color: 'ทอง', size: '6', price: '$1,250.00', stock: 2, hasImage: false },
      { sku: 'WG-ETB-070', name: 'แหวนอีเทอร์นิตี้คลาสสิก', color: 'เงิน', size: '7', price: '$1,150.00', stock: 8, hasImage: false },
    ],
  },
  {
    name: 'สร้อยคอจี้',
    variants: [
      { sku: 'YG-PN-001', name: 'จี้โซลิแทร์', color: 'ทอง', size: 'OS', price: '$850.00', stock: 0, hasImage: true },
    ],
  },
];

const PAGE_SIZE = 4;
const TOTAL_SKUS = 1248;

function stockTone(stock) {
  if (stock === 0) return { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', dot: '#dc2626' };
  if (stock <= 5) return { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#ea580c' };
  return null; // ปกติ ไม่ต้องมีป้ายเตือน
}

export default function InventoryPage() {
  const [collections, setCollections] = useState(MOCK_COLLECTIONS);
  const [page, setPage] = useState(1);

  function adjustStock(collectionIdx, variantIdx, delta) {
    setCollections((prev) => {
      const next = structuredClone(prev);
      const variant = next[collectionIdx].variants[variantIdx];
      variant.stock = Math.max(0, variant.stock + delta);
      // TODO: updateVariantStock(variant.sku, variant.stock)
      return next;
    });
  }

  return (
    <div>
      <div className="staff-page-header">
        <div>
          <h2>จัดการคลังสินค้า</h2>
          <p>จัดการตัวเลือกสินค้า ติดตามระดับสต็อก และอัปเดตข้อมูลอย่างรวดเร็ว</p>
        </div>
        <div className="staff-page-header__actions">
          <button className="staff-btn staff-btn--secondary">
            <span className="material-symbols-outlined">filter_list</span>
            ตัวกรอง
          </button>
          <button className="staff-btn staff-btn--secondary">
            <span className="material-symbols-outlined">download</span>
            ส่งออก
          </button>
          <button className="staff-btn staff-btn--primary">
            <span className="material-symbols-outlined">add</span>
            เพิ่มสินค้าใหม่
          </button>
        </div>
      </div>

      <div className="staff-kpi-grid">
        {MOCK_KPIS.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="staff-card">
        <div className="staff-card__header">
          <h3 style={{ fontWeight: 400 }}>ภาพรวมสต็อกตามตัวเลือกสินค้า</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--staff-text-muted)' }}>
            <span>เรียงตาม:</span>
            <select className="staff-select" style={{ border: 'none' }}>
              <option>ระดับสต็อก (น้อยไปมาก)</option>
              <option>ชื่อคอลเลกชัน</option>
              <option>รหัส SKU (A-Z)</option>
            </select>
          </div>
        </div>

        <div className="staff-table-wrap">
          <table className="staff-table">
            <thead>
              <tr>
                <th style={{ width: 40 }}>
                  <input type="checkbox" />
                </th>
                <th>ชื่อสินค้า</th>
                <th>รหัส SKU</th>
                <th>สี</th>
                <th>ไซซ์</th>
                <th className="align-right">ราคา</th>
                <th className="align-right">สต็อก</th>
                <th className="align-center">แก้ไขด่วน</th>
              </tr>
            </thead>
            <tbody>
              {collections.map((collection, cIdx) => (
                <>
                  <tr key={collection.name} className="staff-table__group-row">
                    <td colSpan={8}>คอลเลกชัน: {collection.name}</td>
                  </tr>
                  {collection.variants.map((variant, vIdx) => {
                    const tone = stockTone(variant.stock);
                    return (
                      <tr key={variant.sku} className="is-row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="staff-table__thumb">
                            {variant.hasImage ? (
                              <div className="staff-table__thumb-placeholder">
                                <span className="material-symbols-outlined">diamond</span>
                              </div>
                            ) : (
                              <div className="staff-table__thumb-placeholder">
                                <span className="material-symbols-outlined">image</span>
                              </div>
                            )}
                            <span style={{ fontWeight: 600 }}>{variant.name}</span>
                          </div>
                        </td>
                        <td className="mono">{variant.sku}</td>
                        <td>{variant.color}</td>
                        <td>{variant.size === 'OS' ? <em>OS</em> : variant.size}</td>
                        <td className="mono align-right">{variant.price}</td>
                        <td className="align-right">
                          {tone ? (
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '4px 8px',
                                borderRadius: 9999,
                                backgroundColor: tone.bg,
                                border: `1px solid ${tone.border}`,
                              }}
                            >
                              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: tone.dot }} />
                              <span className="mono" style={{ color: tone.text, fontWeight: 600 }}>{variant.stock}</span>
                            </span>
                          ) : (
                            <span className="mono">{variant.stock}</span>
                          )}
                        </td>
                        <td>
                          <div className={`staff-stepper${variant.stock === 0 ? ' staff-stepper--disabled' : ''}`}>
                            <button onClick={() => adjustStock(cIdx, vIdx, -1)} aria-label="ลดสต็อก">
                              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>remove</span>
                            </button>
                            <input type="text" value={variant.stock} readOnly />
                            <button onClick={() => adjustStock(cIdx, vIdx, 1)} aria-label="เพิ่มสต็อก">
                              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          page={page}
          totalPages={Math.ceil(TOTAL_SKUS / PAGE_SIZE)}
          totalItems={TOTAL_SKUS}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
          itemLabel="SKU"
        />
      </div>
    </div>
  );
}
