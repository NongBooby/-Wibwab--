import { useState } from 'react';
// TODO: import { getSalesReport } from '../../api/admin.api';

const MOCK_KPIS = [
  { label: 'รายได้รวม', value: '฿ 4,250,000', trend: '+12.5%', trendTone: 'up' },
  { label: 'กำไรขั้นต้น', value: '฿ 1,870,000', trend: '+8.2%', trendTone: 'up' },
  { label: 'มูลค่าเฉลี่ยต่อออเดอร์', value: '฿ 42,500', trend: '0.0%', trendTone: 'flat' },
  { label: 'อัตราการเปลี่ยนเป็นลูกค้า', value: '4.8%', trend: '+2.1%', trendTone: 'up' },
];

// ความสูงกราฟแท่งรายวัน (%) — สีสลับเพื่อไล่สายตา ไม่ได้สื่อความหมายพิเศษ
const MOCK_DAILY_BARS = [40, 60, 30, 80, 50, 75, 45, 90, 100, 65, 85, 55, 70, 95];

const MOCK_BEST_SELLERS = [
  { category: 'สร้อยคอ High Jewelry', sold: 24, revenue: '฿ 1,200,000', profit: '฿ 540,000' },
  { category: 'แหวนเพชรหมั้น', sold: 45, revenue: '฿ 950,000', profit: '฿ 425,000' },
  { category: 'สร้อยข้อมือเทนนิส', sold: 62, revenue: '฿ 780,000', profit: '฿ 310,000' },
  { category: 'นาฬิกาหรู', sold: 18, revenue: '฿ 640,000', profit: '฿ 220,000' },
  { category: 'ต่างหูทอง', sold: 89, revenue: '฿ 450,000', profit: '฿ 180,000' },
];

export default function SalesReportPage() {
  const [month, setMonth] = useState('พ.ค. 2569');
  const [category, setCategory] = useState('');

  return (
    <div>
      <div className="admin-page-header">
        <h1>รายงานยอดขาย</h1>
        <div className="admin-page-header__actions">
          <div className="admin-filters">
            <select className="admin-select" value={month} onChange={(e) => setMonth(e.target.value)}>
              <option>พ.ค. 2569</option>
              <option>เม.ย. 2569</option>
              <option>มี.ค. 2569</option>
            </select>
            <select className="admin-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">ทุกหมวดหมู่</option>
              <option value="necklaces">สร้อยคอ</option>
              <option value="rings">แหวน</option>
              <option value="bracelets">กำไล</option>
            </select>
          </div>
          <button className="admin-btn admin-btn--primary">
            <span className="material-symbols-outlined">download</span>
            ส่งออกเป็น Excel
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="admin-kpi-grid">
        {MOCK_KPIS.map((kpi) => (
          <div className="admin-kpi-card" key={kpi.label}>
            <div className="admin-kpi-card__top">
              <span className="admin-kpi-card__label" style={{ textTransform: 'none', letterSpacing: 0 }}>
                {kpi.label}
              </span>
              <span className={`admin-trend admin-trend--${kpi.trendTone}`}>
                {kpi.trendTone === 'up' && <span className="material-symbols-outlined">arrow_upward</span>}
                {kpi.trendTone === 'flat' && <span className="material-symbols-outlined">remove</span>}
                {kpi.trend}
              </span>
            </div>
            <div className="admin-kpi-card__value">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Main chart */}
      <div className="admin-card" style={{ marginBottom: 24 }}>
        <div className="admin-card__header">
          <h3>ยอดขายรายวัน</h3>
          <div className="admin-card__legend">
            <span className="admin-card__legend-dot" />
            <span>รายได้ (฿)</span>
          </div>
        </div>
        <div className="admin-card__body">
          <div className="admin-chart-bars">
            {MOCK_DAILY_BARS.map((h, i) => (
              <div
                key={i}
                className={`admin-chart-bars__bar${i % 3 === 2 ? ' admin-chart-bars__bar--alt' : ''}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="admin-chart-x-labels">
            <span>1</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>31</span>
          </div>
        </div>
      </div>

      {/* Bottom row: best sellers table + seasonal comparison */}
      <div className="admin-sales-bottom-grid">
        <div className="admin-card admin-sales-bottom-grid__table">
          <div className="admin-card__header">
            <h3>สินค้าขายดีตามหมวดหมู่</h3>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>หมวดหมู่</th>
                  <th className="align-right">จำนวนที่ขาย</th>
                  <th className="align-right">รายได้ (฿)</th>
                  <th className="align-right">กำไร (฿)</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_BEST_SELLERS.map((row) => (
                  <tr key={row.category}>
                    <td className="admin-cell-primary">{row.category}</td>
                    <td className="align-right">{row.sold}</td>
                    <td className="align-right">{row.revenue}</td>
                    <td className="align-right admin-cell-gold">{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>เทียบตามฤดูกาล</h3>
              <span className="material-symbols-outlined" style={{ color: 'var(--admin-text-muted)' }}>calendar_month</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--admin-text-muted)', margin: '0 0 16px' }}>
              พ.ค. 2569 เทียบกับ พ.ค. 2568
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--admin-text-muted)', marginBottom: 4 }}>พ.ค. 2569</div>
                <div style={{ fontSize: 28, fontWeight: 600, color: 'var(--admin-text)' }}>฿ 4.25M</div>
              </div>
              <span className="admin-trend admin-trend--up">
                <span className="material-symbols-outlined">arrow_upward</span>
                18.4%
              </span>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--admin-text-muted)', marginBottom: 4 }}>พ.ค. 2568</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--admin-text-muted)' }}>฿ 3.59M</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 64, marginTop: 16 }}>
            <div style={{ width: '50%', height: '60%', backgroundColor: 'var(--admin-border)', borderRadius: '2px 2px 0 0' }} />
            <div style={{ width: '50%', height: '85%', backgroundColor: 'var(--admin-gold)', borderRadius: '2px 2px 0 0' }} />
          </div>
        </div>
      </div>

      <style>{`
        .admin-sales-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1024px) {
          .admin-sales-bottom-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
