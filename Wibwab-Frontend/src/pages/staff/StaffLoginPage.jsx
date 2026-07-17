import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/staff.css';
// TODO: ตอน backend/JWT พร้อมแล้ว ให้ import { login } from '../../api/auth.api';
// และ import { useAuth } from '../../context/AuthContext'; เพื่อเก็บ token + user จริง

/**
 * หน้าล็อกอินพนักงาน — เวอร์ชันชั่วคราว (UI เท่านั้น ยังไม่เชื่อม backend)
 *
 * ตอนนี้กด "เข้าสู่ระบบ" จะพาไป /staff/dashboard ตรงๆ เพื่อให้ทดสอบหน้าตาได้ก่อน
 * เมื่อ backend มี POST /api/auth/login (role=staff) พร้อมแล้ว ให้แทนที่ handleSubmit
 * ด้วยการเรียก API จริง เก็บ JWT ผ่าน AuthContext แล้วค่อย navigate ไป dashboard
 */
export default function StaffLoginPage({
  redirectTo = '/staff/dashboard',
  backTo = '/',
  backLabel = '← กลับหน้าลูกค้า',
  portalLabel = 'ระบบพนักงาน',
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    // TODO: แทนที่ด้วยของจริง เช่น
    // try {
    //   const res = await login({ email: form.email, password: form.password });
    //   if (res.data.user.role !== 'staff') { setError('บัญชีนี้ไม่มีสิทธิ์เข้าหน้าพนักงาน'); return; }
    //   authContext.setUser(res.data.user, res.data.token);
    //   navigate('/staff/dashboard');
    // } catch (err) {
    //   setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    // }

    navigate(redirectTo);
  }

  return (
    <div className="staff-app staff-login">
      <div className="staff-login__card">
        <div className="staff-login__brand">
          <div className="staff-login__logo">ว</div>
          <h1>วิบวับ</h1>
          <p>{portalLabel}</p>
        </div>

        <form onSubmit={handleSubmit} className="staff-login__form">
          <div className="staff-form-group">
            <label className="staff-form-label" htmlFor="email">อีเมล</label>
            <input
              id="email"
              type="email"
              className="staff-form-control"
              placeholder="staff@wibwab.com"
              value={form.email}
              onChange={handleChange('email')}
              autoComplete="username"
            />
          </div>

          <div className="staff-form-group">
            <label className="staff-form-label" htmlFor="password">รหัสผ่าน</label>
            <input
              id="password"
              type="password"
              className="staff-form-control"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange('password')}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="staff-login__error">{error}</p>}

          <button type="submit" className="staff-btn staff-btn--primary staff-login__submit">
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="staff-login__note">
          หน้านี้เป็นเวอร์ชันชั่วคราว — ยังไม่ตรวจสอบรหัสผ่านจริงจนกว่า backend auth จะเสร็จ
        </p>

        <Link to={backTo} className="staff-login__back">{backLabel}</Link>
      </div>

      <style>{`
        .staff-login {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--staff-primary-dark, #134e4a);
          padding: 16px;
        }
        .staff-login__card {
          width: 100%;
          max-width: 380px;
          background-color: var(--staff-surface, #fff);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        .staff-login__brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }
        .staff-login__logo {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--staff-primary, #0f766e);
          color: #fff;
          font-weight: 700;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .staff-login__brand h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }
        .staff-login__brand p {
          margin: 0;
          font-size: 12px;
          color: var(--staff-text-muted, #6e7977);
        }
        .staff-login__form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .staff-login__submit {
          width: 100%;
          justify-content: center;
          margin-top: 8px;
        }
        .staff-login__error {
          margin: -8px 0 0;
          font-size: 13px;
          color: var(--staff-error, #ba1a1a);
        }
        .staff-login__note {
          margin: 20px 0 0;
          font-size: 12px;
          color: var(--staff-text-muted, #6e7977);
          text-align: center;
          line-height: 1.5;
        }
        .staff-login__back {
          display: block;
          margin-top: 16px;
          text-align: center;
          font-size: 13px;
          color: var(--staff-primary, #0f766e);
          text-decoration: none;
        }
        .staff-login__back:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
