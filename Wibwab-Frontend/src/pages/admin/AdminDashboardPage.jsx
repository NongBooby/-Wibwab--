import { useState } from 'react';
// TODO: import { getAdminDashboard } from '../../api/admin.api';

// Mock data — แทนที่ด้วยผลลัพธ์จาก GET /api/admin/dashboard เมื่อ backend พร้อม
const MOCK_KPIS = [
  { label: 'ยอดขายวันนี้', value: '฿142,500', trend: '+12.5%', trendTone: 'up' },
  { label: 'รายได้เดือนนี้', value: '฿4,250,000', trend: '+8.2%', trendTone: 'up' },
  { label: 'คำสั่งซื้อทั้งหมด', value: '1,842', trend: '0.0%', trendTone: 'flat' },
  { label: 'ลูกค้าใหม่', value: '854', trend: '-3.2%', trendTone: 'down' },
];

// จุดข้อมูลยอดขายรายวัน (ความสูงเป็น % สำหรับกราฟแท่งอย่างง่าย — ไม่ใช้ library เพิ่ม)
const MOCK_DAILY_SALES = [55, 45, 47, 62, 56, 76, 62, 90, 82, 55, 88, 61, 87, 60, 100];

const MOCK_CHANNELS = [
  { label: 'เว็บไซต์', percent: 45, color: 'var(--admin-primary)' },
  { label: 'Shopee', percent: 30, color: '#94a3b8' },
  { label: 'Lazada', percent: 15, color: '#cbd5e1' },
  { label: 'Instagram', percent: 10, color: '#e2e8f0' },
];

const MOCK_TOP_PRODUCTS = [
  { name: 'Celestial Pendant', category: 'สร้อยคอ', sold: 420, revenue: '฿630,000' },
  { name: 'Gold Chain Link', category: 'สร้อยคอ', sold: 312, revenue: '฿468,000' },
  { name: 'Radiant Cut Ring', category: 'แหวน', sold: 285, revenue: '฿855,000' },
];

export default function AdminDashboardPage() {
  const [range, setRange] = useState('7D');
  const kpis = MOCK_KPIS;
  const dailySales = MOCK_DAILY_SALES;
  const channels = MOCK_CHANNELS;
  const topProducts = MOCK_TOP_PRODUCTS;

  return (
    <div>
      <div className="admin-page-header">
        <h1>ภาพรวม</h1>
        <div className="admin-page-header__actions">
          <div className="admin-filters">
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--admin-text-muted)' }}>
              calendar_today
            </span>
            <span style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>1 - 31 พ.ค. 2569</span>
          </div>
          <button className="admin-btn admin-btn--primary">
            <span>ส่งออก</span>
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="admin-kpi-grid">
        {kpis.map((kpi) => (
          <div className="admin-kpi-card" key={kpi.label}>
            <div className="admin-kpi-card__top">
              <span className="admin-kpi-card__label" style={{ textTransform: 'none', letterSpacing: 0 }}>
                {kpi.label}
              </span>
              <span className={`admin-trend admin-trend--${kpi.trendTone}`}>
                {kpi.trendTone === 'up' && <span className="material-symbols-outlined">arrow_upward</span>}
                {kpi.trendTone === 'down' && <span className="material-symbols-outlined">arrow_downward</span>}
                {kpi.trendTone === 'flat' && <span className="material-symbols-outlined">remove</span>}
                {kpi.trend}
              </span>
            </div>
            <div className="admin-kpi-card__value">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="admin-dashboard-grid">
        <div className="admin-card">
          <div className="admin-card__header">
            <h3>ยอดขายรายวัน</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setRange('7D')}
                className="admin-btn admin-btn--secondary"
                style={{ height: 28, padding: '0 12px', fontSize: 12 }}
              >
                7 วัน
              </button>
              <button
                onClick={() => setRange('30D')}
                className="admin-btn admin-btn--secondary"
                style={{ height: 28, padding: '0 12px', fontSize: 12 }}
              >
                30 วัน
              </button>
            </div>
          </div>
          <div className="admin-card__body">
            <div className="admin-chart-bars">
              {dailySales.map((h, i) => (
                <div
                  key={i}
                  className="admin-chart-bars__bar"
                  style={{ height: `${h}%` }}
                  title={`${h}%`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card__header">
            <h3>ยอดขายตามช่องทาง</h3>
          </div>
          <div className="admin-card__body">
            {channels.map((ch) => (
              <div className="admin-progress-row" key={ch.label}>
                <div className="admin-progress-row__label">
                  <span style={{ color: 'var(--admin-text-muted)' }}>{ch.label}</span>
                  <span>{ch.percent}%</span>
                </div>
                <div className="admin-progress-track">
                  <div
                    className="admin-progress-fill"
                    style={{ width: `${ch.percent}%`, backgroundColor: ch.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top selling products table */}
      <div className="admin-card" style={{ marginTop: 24 }}>
        <div className="admin-card__header">
          <h3>สินค้าขายดี</h3>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>หมวดหมู่</th>
                <th className="align-right">จำนวนที่ขาย</th>
                <th className="align-right">รายได้</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p) => (
                <tr key={p.name}>
                  <td>
                    <div className="admin-cell-thumb">
                      <div className="admin-cell-thumb-placeholder">
                        <span className="material-symbols-outlined">diamond</span>
                      </div>
                      <span className="admin-cell-primary">{p.name}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--admin-text-muted)' }}>{p.category}</td>
                  <td className="align-right">{p.sold}</td>
                  <td className="align-right">{p.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .admin-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1024px) {
          .admin-dashboard-grid {
            grid-template-columns: 3fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
