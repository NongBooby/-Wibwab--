// components/common/AdminTopbar.jsx — แถบด้านบนของ Executive Suite (ชื่อหน้า + แจ้งเตือน + ผู้ใช้)
import { useAdminAuth as useAuth } from '../../context/AdminAuthContext';

// สร้างอักษรย่อจากชื่อ-นามสกุลจริง (เช่น "มานี มีทรัพย์" → "มม") ไว้โชว์ตอนไม่มีรูปโปรไฟล์
function getInitials(fullName) {
  if (!fullName) return '?';
  const parts = fullName.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((p) => p.charAt(0)).join('');
  return initials.toUpperCase() || '?';
}

export default function AdminTopbar({ title = 'Executive Portal' }) {
  const { user } = useAuth();

  return (
    <header className="admin-topbar">
      <h2 className="admin-topbar__title">{title}</h2>
      <div className="admin-topbar__right">
        <button className="admin-icon-btn" aria-label="การแจ้งเตือน">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <span className="admin-topbar__username">{user?.full_name ?? 'แอดมิน'}</span>
        <div className="admin-topbar__avatar admin-topbar__avatar--fallback">
          {getInitials(user?.full_name)}
        </div>
      </div>
    </header>
  );
}