// components/common/ProtectedRoute.jsx — กันหน้าที่ต้องล็อกอิน + เช็ค role ก่อนเข้าถึง
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// หน้า login ของแต่ละ role — ใช้ตอน redirect กรณียังไม่ได้ล็อกอิน
const LOGIN_PATH_BY_ROLE = {
  customer: '/login',
  staff: '/staff/login',
  admin: '/admin/login',
};

/**
 * ครอบ route ที่ต้องล็อกอินก่อนถึงจะเข้าได้
 *
 * วิธีใช้:
 *   <ProtectedRoute role="staff"><StaffLayout /></ProtectedRoute>
 *   <ProtectedRoute role={['staff', 'admin']}><SomePage /></ProtectedRoute>  // อนุญาตหลาย role
 *
 * พฤติกรรม:
 *   - ยังไม่ล็อกอิน            → เด้งไปหน้า login ของ role นั้น พร้อมจำหน้าที่ตั้งใจจะเข้า (state.from)
 *   - ล็อกอินแล้วแต่ role ไม่ตรง → เด้งกลับหน้าแรก (กันบัญชีลูกค้ามาเปิด /staff เอง)
 *   - ล็อกอินแล้วและ role ตรง   → แสดง children ตามปกติ
 */
export default function ProtectedRoute({ children, role }) {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  const allowedRoles = Array.isArray(role) ? role : [role];

  if (!isLoggedIn) {
    const loginPath = LOGIN_PATH_BY_ROLE[allowedRoles[0]] || '/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
