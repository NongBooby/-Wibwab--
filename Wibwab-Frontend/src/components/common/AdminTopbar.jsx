// components/common/AdminTopbar.jsx — แถบด้านบนของ Executive Suite (ชื่อหน้า + แจ้งเตือน + ผู้ใช้)
export default function AdminTopbar({ title = 'Executive Portal' }) {
  return (
    <header className="admin-topbar">
      <h2 className="admin-topbar__title">{title}</h2>
      <div className="admin-topbar__right">
        <button className="admin-icon-btn" aria-label="การแจ้งเตือน">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="admin-topbar__avatar admin-topbar__avatar--fallback">
          {/* TODO: แทนที่ด้วยรูป/ชื่อย่อของผู้ใช้จริงจาก AuthContext */}
          MG
        </div>
      </div>
    </header>
  );
}
