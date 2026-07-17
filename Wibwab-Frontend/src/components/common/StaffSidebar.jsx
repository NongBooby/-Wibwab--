import { NavLink } from 'react-router-dom';

// เมนูฝั่งพนักงาน — เพิ่ม/ลด item ได้ตรงนี้ที่เดียว
const NAV_ITEMS = [
  { to: '/staff/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { to: '/staff/orders', label: 'Orders', icon: 'shopping_cart' },
  { to: '/staff/inventory', label: 'Inventory', icon: 'inventory_2' },
  { to: '/staff/products', label: 'Products', icon: 'diamond' },
];

/**
 * Sidebar นำทางฝั่งพนักงาน (Staff Portal)
 * ใช้ NavLink ของ react-router-dom เพื่อไฮไลต์เมนูที่ active อัตโนมัติ
 */
export default function StaffSidebar() {
  return (
    <nav className="staff-sidebar">
      <div className="staff-sidebar__brand">
        <div className="staff-sidebar__logo">L</div>
        <div>
          <h1>LuxeJewel</h1>
          <p>Staff Portal</p>
        </div>
      </div>

      <div className="staff-sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'staff-sidebar__link' + (isActive ? ' is-active' : '')
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="staff-sidebar__status">
        <p>System Status</p>
        <div className="staff-sidebar__status-row">
          <span className="staff-sidebar__dot" />
          <span>All systems operational</span>
        </div>
      </div>
    </nav>
  );
}
