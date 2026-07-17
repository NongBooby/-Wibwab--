import { useEffect, useState } from 'react';
import StatusBadge from '../../components/dashboard/StatusBadge';
import Pagination from '../../components/dashboard/Pagination';
// TODO: import { getStaffOrders, verifyOrderPayment, updateOrderStatus } from '../../api/staff.api';

// Mock data — แทนที่ด้วยผลลัพธ์จาก GET /api/staff/orders
const MOCK_ORDERS = [
  {
    id: '#ORD-0992',
    date: 'Oct 24, 2023',
    customer: 'Eleanor Vance',
    initials: 'EH',
    paymentStatus: 'paid',
    fulfillment: 'processing',
    total: '$4,250.00',
  },
  {
    id: '#ORD-0991',
    date: 'Oct 23, 2023',
    customer: 'Marcus Webb',
    initials: 'MW',
    paymentStatus: 'refunded',
    fulfillment: 'unfulfilled',
    total: '-$850.00',
  },
  {
    id: '#ORD-0990',
    date: 'Oct 23, 2023',
    customer: 'Sarah Jenkins',
    initials: 'SJ',
    paymentStatus: 'pending',
    fulfillment: 'unfulfilled',
    total: '$12,400.00',
  },
];

const PAGE_SIZE = 3;
const TOTAL_ORDERS = 124; // จำนวนรวมจริงจาก backend (สำหรับ pagination)

export default function OrderManagePage() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [paymentFilter, setPaymentFilter] = useState('');
  const [fulfillmentFilter, setFulfillmentFilter] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // getStaffOrders({ payment: paymentFilter, fulfillment: fulfillmentFilter, page })
    //   .then((res) => setOrders(res.data.items));
  }, [paymentFilter, fulfillmentFilter, page]);

  return (
    <div>
      <div className="staff-page-header">
        <div>
          <h1 style={{ fontSize: 24 }}>Orders</h1>
          <p>Manage and track customer jewelry orders.</p>
        </div>
        <div className="staff-page-header__actions">
          <button className="staff-btn staff-btn--ghost">
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
          <button className="staff-btn staff-btn--primary">
            <span className="material-symbols-outlined">add</span>
            Create Order
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="staff-filters">
        <div className="staff-filters__row">
          <select
            className="staff-select"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
          >
            <option value="">All Payment Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="refunded">Refunded</option>
          </select>

          <select
            className="staff-select"
            value={fulfillmentFilter}
            onChange={(e) => setFulfillmentFilter(e.target.value)}
          >
            <option value="">All Fulfillment</option>
            <option value="unfulfilled">Unfulfilled</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>

          <div className="staff-input" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_today</span>
            <input
              type="text"
              placeholder="Last 30 Days"
              readOnly
              style={{ border: 'none', outline: 'none', width: 96 }}
            />
          </div>
        </div>

        {paymentFilter && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--staff-text-muted)' }}>Active Filters:</span>
            <div className="staff-chip">
              Status: {paymentFilter}
              <button onClick={() => setPaymentFilter('')} aria-label="ล้างตัวกรอง">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>close</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="staff-card">
        <div className="staff-table-wrap">
          <table className="staff-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payment Status</th>
                <th>Fulfillment</th>
                <th className="align-right">Total</th>
                <th className="align-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="is-row">
                  <td className="mono" style={{ color: 'var(--staff-primary)', fontWeight: 600 }}>
                    {order.id}
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: 'var(--staff-surface-low)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 11,
                          color: 'var(--staff-text-muted)',
                        }}
                      >
                        {order.initials}
                      </div>
                      <span style={{ fontWeight: 600 }}>{order.customer}</span>
                    </div>
                  </td>
                  <td>
                    <StatusBadge status={order.paymentStatus} />
                  </td>
                  <td>
                    <StatusBadge status={order.fulfillment} />
                  </td>
                  <td className="mono align-right" style={{ fontWeight: 600 }}>
                    {order.total}
                  </td>
                  <td className="align-right">
                    <div className="staff-table__actions">
                      <button className="staff-icon-btn" title="View Details">
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>visibility</span>
                      </button>
                      <button className="staff-icon-btn" title="Print Invoice">
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>print</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          page={page}
          totalPages={Math.ceil(TOTAL_ORDERS / PAGE_SIZE)}
          totalItems={TOTAL_ORDERS}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
