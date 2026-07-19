// TODO: import { getProfitReport } from '../../api/admin.api';

const MOCK_KPIS = [
  { label: 'รายได้รวม', value: '฿ 45,280,000', trend: '+10.2%', trendTone: 'up' },
  { label: 'ต้นทุนรวม', value: '฿ 26,081,280', trend: null },
  { label: 'กำไรขั้นต้น', value: '฿ 19,198,720', trend: '+8.5%', trendTone: 'up', gold: true },
  { label: 'อัตรากำไรสุทธิ', value: '42.4%', trend: null },
];

// จุดข้อมูลกราฟเส้นรายเดือน (0-100) — วาดด้วย SVG polyline ธรรมดา ไม่ใช้ library เพิ่ม
const MOCK_MONTHLY_POINTS = [50, 40, 60, 80, 70, 110, 100, 130, 115, 160, 155, 180];
const MONTH_LABELS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

const MOCK_MONTHLY_BREAKDOWN = [
  { month: 'ธันวาคม', revenue: '฿ 5,200,000', cost: '฿ 2,800,000', profit: '฿ 2,400,000', margin: '46.1%' },
  { month: 'พฤศจิกายน', revenue: '฿ 4,850,000', cost: '฿ 2,750,000', profit: '฿ 2,100,000', margin: '43.2%' },
  { month: 'ตุลาคม', revenue: '฿ 3,900,000', cost: '฿ 2,300,000', profit: '฿ 1,600,000', margin: '41.0%' },
  { month: 'กันยายน', revenue: '฿ 4,100,000', cost: '฿ 2,450,000', profit: '฿ 1,650,000', margin: '40.2%' },
];

const MOCK_PROFIT_BY_CATEGORY = [
  { category: 'แหวน', profit: '฿ 8,450,000', color: '#b08d57' },
  { category: 'สร้อยคอ', profit: '฿ 5,230,000', color: '#1e293b' },
  { category: 'ต่างหู', profit: '฿ 3,800,000', color: '#64748b' },
  { category: 'กำไล', profit: '฿ 1,718,720', color: '#e2e8f0' },
];

// แปลงจุดข้อมูล (0-100) เป็น path points ของ SVG viewBox 0 0 1000 200 (แกน y กลับด้าน)
function toSvgPoints(values) {
  const max = Math.max(...values);
  const step = 1000 / (values.length - 1);
  return values
    .map((v, i) => `${Math.round(i * step)},${Math.round(200 - (v / max) * 180)}`)
    .join(' ');
}

export default function ProfitReportPage() {
  const points = toSvgPoints(MOCK_MONTHLY_POINTS);
  const pointCoords = points.split(' ').map((p) => p.split(',').map(Number));

  return (
    <div>
      <div className="admin-page-header">
        <h1>รายงานกำไร</h1>
        <div className="admin-page-header__actions">
          <span className="admin-link-btn">ช่วงวันที่</span>
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
              <span className="admin-kpi-card__label">{kpi.label}</span>
              {kpi.trend && (
                <span className={`admin-trend admin-trend--${kpi.trendTone}`}>
                  <span className="material-symbols-outlined">arrow_upward</span>
                  {kpi.trend}
                </span>
              )}
            </div>
            <div className={`admin-kpi-card__value${kpi.gold ? '' : ' admin-kpi-card__value--slate'}`}>
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {/* Line chart */}
      <div className="admin-card" style={{ marginBottom: 24 }}>
        <div className="admin-card__header">
          <h3>แนวโน้มกำไรรายเดือน</h3>
          <div className="admin-card__legend">
            <span className="admin-card__legend-dot" />
            <span>กำไร (บาท)</span>
          </div>
        </div>
        <div className="admin-card__body">
          <div style={{ width: '100%', height: 240, position: 'relative' }}>
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <polyline
                points={points}
                fill="none"
                stroke="var(--admin-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {pointCoords.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="var(--admin-gold)" />
              ))}
            </svg>
            <div
              style={{
                position: 'absolute',
                bottom: -24,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 10,
                color: 'var(--admin-text-muted)',
              }}
            >
              {MONTH_LABELS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: monthly breakdown + profit by category */}
      <div className="admin-profit-bottom-grid">
        <div className="admin-card admin-profit-bottom-grid__table">
          <div className="admin-card__header">
            <h3>สรุปรายเดือน</h3>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>เดือน</th>
                  <th className="align-right">รายได้</th>
                  <th className="align-right">ต้นทุน</th>
                  <th className="align-right">กำไร</th>
                  <th className="align-right">อัตรากำไร</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_MONTHLY_BREAKDOWN.map((row) => (
                  <tr key={row.month}>
                    <td className="admin-cell-primary">{row.month}</td>
                    <td className="align-right">{row.revenue}</td>
                    <td className="align-right">{row.cost}</td>
                    <td className="align-right admin-cell-gold">{row.profit}</td>
                    <td className="align-right">{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card__header">
            <h3>กำไรตามหมวดหมู่</h3>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table" style={{ minWidth: 'auto' }}>
              <thead>
                <tr>
                  <th>หมวดหมู่</th>
                  <th className="align-right">กำไร</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_PROFIT_BY_CATEGORY.map((row) => (
                  <tr key={row.category}>
                    <td>
                      <span className="admin-dot" style={{ backgroundColor: row.color }} />
                      {row.category}
                    </td>
                    <td className="align-right" style={{ fontWeight: 500 }}>{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .admin-profit-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1024px) {
          .admin-profit-bottom-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
