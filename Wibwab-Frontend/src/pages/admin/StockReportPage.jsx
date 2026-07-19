// TODO: import { getStockReport } from '../../api/admin.api';

const MOCK_KPIS = [
  { label: 'SKU ทั้งหมด', value: '12,450', icon: 'category', tone: 'slate' },
  { label: 'มีสต็อก', value: '11,204', icon: 'check_circle', tone: 'slate' },
  { label: 'สต็อกต่ำ', value: '842', icon: 'warning', tone: 'warning' },
  { label: 'หมดสต็อก', value: '404', icon: 'error', tone: 'danger' },
];

const MOCK_LOW_STOCK = [
  { name: 'Eternity Tennis Bracelet', sku: 'TB-1024-WG', variant: 'White Gold / 18k', qty: 4, threshold: 10 },
  { name: 'Midnight Sapphire Pendant', sku: 'PD-883-SA', variant: 'Platinum / Blue', qty: 2, threshold: 5 },
  { name: 'Classic Aurelia Hoops', sku: 'ER-045-YG', variant: 'Yellow Gold / 24k', qty: 8, threshold: 15 },
];

const MOCK_SLOW_MOVING = [
  { name: 'Vintage Ruby Brooch', category: 'เข็มกลัด', value: '฿ 437,500', days: 145 },
  { name: 'Onyx Cufflinks Set', category: 'เครื่องประดับผู้ชาย', value: '฿ 147,000', days: 122 },
];

export default function StockReportPage() {
  return (
    <div>
      <div className="admin-page-header">
        <h1>รายงานสต็อก</h1>
        <div className="admin-page-header__actions">
          <div className="admin-filters">
            <span className="admin-link-btn">ช่วงวันที่</span>
          </div>
          <button className="admin-btn admin-btn--primary">
            <span className="material-symbols-outlined">download</span>
            ส่งออก
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="admin-kpi-grid">
        {MOCK_KPIS.map((kpi) => (
          <div className="admin-kpi-card" key={kpi.label}>
            <div className="admin-kpi-card__top" style={{ marginBottom: 4 }}>
              <span className="admin-kpi-card__label" style={{ textTransform: 'none', letterSpacing: 0 }}>
                {kpi.label}
              </span>
              <span
                className="material-symbols-outlined admin-kpi-card__icon"
                style={
                  kpi.tone === 'warning'
                    ? { color: 'var(--admin-warning-text)' }
                    : kpi.tone === 'danger'
                    ? { color: 'var(--admin-error-text)' }
                    : undefined
                }
              >
                {kpi.icon}
              </span>
            </div>
            <div
              className={`admin-kpi-card__value admin-kpi-card__value--${
                kpi.tone === 'warning' ? 'warning' : kpi.tone === 'danger' ? 'danger' : 'slate'
              }`}
            >
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {/* Low stock table */}
      <div className="admin-card" style={{ marginBottom: 24 }}>
        <div className="admin-card__header">
          <h3>สินค้าใกล้หมดสต็อก</h3>
          <button className="admin-link-btn">
            ดูทั้งหมด <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>SKU</th>
                <th>ตัวเลือก</th>
                <th className="align-right">คงเหลือ</th>
                <th className="align-right">เกณฑ์แจ้งเตือน</th>
                <th className="align-right">การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LOW_STOCK.map((item) => (
                <tr key={item.sku}>
                  <td>
                    <div className="admin-cell-thumb">
                      <div className="admin-cell-thumb-placeholder">
                        <span className="material-symbols-outlined">diamond</span>
                      </div>
                      <span className="admin-cell-primary">{item.name}</span>
                    </div>
                  </td>
                  <td className="mono" style={{ color: 'var(--admin-text-muted)' }}>{item.sku}</td>
                  <td style={{ color: 'var(--admin-text-muted)' }}>{item.variant}</td>
                  <td className="align-right" style={{ fontWeight: 500, color: 'var(--admin-warning-text)' }}>
                    {item.qty}
                  </td>
                  <td className="align-right" style={{ color: 'var(--admin-text-muted)' }}>{item.threshold}</td>
                  <td className="align-right">
                    <button className="admin-btn admin-btn--secondary" style={{ height: 32, padding: '0 12px', fontSize: 12 }}>
                      เติมสต็อก
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slow moving table */}
      <div className="admin-card">
        <div className="admin-card__header">
          <h3>สินค้าที่ขายช้า</h3>
          <button className="admin-link-btn">
            แผนล้างสต็อก <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>หมวดหมู่</th>
                <th className="align-right">มูลค่ารวม</th>
                <th className="align-right">จำนวนวันในสต็อก</th>
                <th className="align-right">การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_SLOW_MOVING.map((item) => (
                <tr key={item.name}>
                  <td className="admin-cell-primary">{item.name}</td>
                  <td style={{ color: 'var(--admin-text-muted)' }}>{item.category}</td>
                  <td className="align-right" style={{ color: 'var(--admin-text-muted)' }}>{item.value}</td>
                  <td className="align-right" style={{ color: 'var(--admin-text-muted)' }}>{item.days} วัน</td>
                  <td className="align-right">
                    <button className="admin-link-btn">สร้างโปรโมชัน</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
