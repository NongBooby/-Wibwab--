import StatCard from '../../components/dashboard/StatCard';
import StatusBadge from '../../components/dashboard/StatusBadge';
// TODO: import { getStaffDashboard } from '../../api/staff.api';
import { useEffect, useState } from 'react';

// Mock data — แทนที่ด้วยผลลัพธ์จาก GET /api/staff/dashboard เมื่อ backend พร้อม
const MOCK_KPIS = [
  { icon: 'payments', label: 'ยอดขายรวม', value: '$45,200.00', trend: '+12%' },
  { icon: 'pending_actions', label: 'คำสั่งซื้อรอดำเนินการ', value: '28' },
  { icon: 'group_add', label: 'ลูกค้าใหม่', value: '156', trend: '+5%' },
  { icon: 'warning', label: 'สินค้าหมดสต็อก', value: '4', iconTone: 'error' },
];

const MOCK_RECENT_ORDERS = [
  { id: '#ORD-9081', customer: 'Eleanor Vance', date: 'Oct 24, 2023', total: '$1,250.00', status: 'processing' },
  { id: '#ORD-9080', customer: 'Arthur Pendelton', date: 'Oct 24, 2023', total: '$4,500.00', status: 'shipped' },
  { id: '#ORD-9079', customer: 'Sarah Jenkins', date: 'Oct 23, 2023', total: '$850.00', status: 'delivered' },
  { id: '#ORD-9078', customer: 'Marcus Thorne', date: 'Oct 23, 2023', total: '$12,000.00', status: 'delivered' },
  { id: '#ORD-9077', customer: 'Lydia Bennett', date: 'Oct 22, 2023', total: '$320.00', status: 'processing' },
];

const MOCK_TOP_PRODUCTS = [
  { name: 'Classic Diamond Solitaire', category: 'Rings', sku: 'RNG-001', sold: 42 },
  { name: 'Sapphire Teardrop Pendant', category: 'Necklaces', sku: 'NCK-042', sold: 38 },
  { name: 'Pavé Diamond Hoops', category: 'Earrings', sku: 'ERR-112', sold: 24 },
  { name: 'Chronograph Steel Watch', category: 'Watches', sku: 'WTC-008', sold: 15 },
];

export default function StaffDashboardPage() {
  const [kpis, setKpis] = useState(MOCK_KPIS);
  const [recentOrders, setRecentOrders] = useState(MOCK_RECENT_ORDERS);
  const [topProducts, setTopProducts] = useState(MOCK_TOP_PRODUCTS);

  useEffect(() => {
    // getStaffDashboard().then((res) => {
    //   setKpis(res.data.kpis);
    //   setRecentOrders(res.data.recentOrders);
    //   setTopProducts(res.data.topProducts);
    // });
  }, []);

  return (
    <div>
      <div className="staff-page-header">
        <div>
          <h1>แดชบอร์ด</h1>
          <p>ภาพรวมการดำเนินงานวันนี้</p>
        </div>
        <div className="staff-page-header__actions">
          <button className="staff-btn staff-btn--secondary">ส่งออกรายงาน</button>
          <button className="staff-btn staff-btn--primary">สร้างคำสั่งซื้อใหม่</button>
        </div>
      </div>

      <div className="staff-kpi-grid">
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="dashboard-grid">
        {/* Recent Orders */}
        <div className="staff-card">
          <div className="staff-card__header">
            <h3>คำสั่งซื้อล่าสุด</h3>
            <button className="staff-card__link">ดูทั้งหมด</button>
          </div>
          <div className="staff-table-wrap">
            <table className="staff-table">
              <thead>
                <tr>
                  <th>รหัสคำสั่งซื้อ</th>
                  <th>ลูกค้า</th>
                  <th>วันที่</th>
                  <th>ยอดรวม</th>
                  <th>สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="is-row">
                    <td className="mono">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td className="mono">{order.total}</td>
                    <td>
                      <StatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="staff-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="staff-card__header">
            <h3>สินค้าขายดี</h3>
            <button className="staff-icon-btn" aria-label="เพิ่มเติม">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="staff-card__body" style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
            {topProducts.map((p) => (
              <div key={p.sku} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="staff-table__thumb-placeholder" style={{ width: 40, height: 40 }}>
                  <span className="material-symbols-outlined">diamond</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 600 }}>{p.name}</p>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--staff-text-muted)' }}>
                    {p.category} • SKU: {p.sku}
                  </p>
                </div>
                <div className="mono" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>ขายแล้ว {p.sold}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: 16, paddingTop: 0 }}>
            <button className="staff-btn staff-btn--ghost" style={{ width: '100%', justifyContent: 'center' }}>
              ดูรายงานคลังสินค้า
            </button>
          </div>
        </div>
      </div>

      {/* จัดเลย์เอาต์ 2 คอลัมน์ (แทน Tailwind grid-cols-12: 8/4) */}
      <style>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
