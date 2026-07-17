import { NavLink } from 'react-router-dom';

// เมนูฝั่งพนักงาน — เพิ่ม/ลด item ได้ตรงนี้ที่เดียว
const NAV_ITEMS = [
  { to: '/staff/dashboard', label: 'แดชบอร์ด', icon: 'dashboard' },
  { to: '/staff/orders', label: 'คำสั่งซื้อ', icon: 'shopping_cart' },
  { to: '/staff/inventory', label: 'คลังสินค้า', icon: 'inventory_2' },
  { to: '/staff/products', label: 'สินค้า', icon: 'diamond' },
];

/**
 * Sidebar นำทางฝั่งพนักงาน (Staff Portal)
 * ใช้ NavLink ของ react-router-dom เพื่อไฮไลต์เมนูที่ active อัตโนมัติ
 */
export default function StaffSidebar() {
  return (
    <nav className="staff-sidebar">
      <div className="staff-sidebar__brand">
        <div className="staff-sidebar__logo">ว</div>
        <div>
          <h1>วิบวับ</h1>
          <p>ระบบพนักงาน</p>
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
        <p>สถานะระบบ</p>
        <div className="staff-sidebar__status-row">
          <span className="staff-sidebar__dot" />
          <span>ระบบทำงานปกติ</span>
        </div>
      </div>
    </nav>
  );
}
