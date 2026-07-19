// services/auth.service.js — logic สมัครสมาชิก / เข้าสู่ระบบ / ออก JWT
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const { isEmail, isNonEmptyString, httpError } = require('../utils/validators');

// ออก token อายุ 7 วัน — payload เก็บแค่ที่จำเป็น
function signToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role, name: user.full_name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

async function register({ email, password, full_name, phone }) {
  if (!isEmail(email)) throw httpError(400, 'รูปแบบอีเมลไม่ถูกต้อง');
  if (!isNonEmptyString(password) || password.length < 8) {
    throw httpError(400, 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร');
  }
  if (!isNonEmptyString(full_name)) throw httpError(400, 'กรุณากรอกชื่อ-นามสกุล');

  const [dup] = await pool.execute('SELECT id FROM users WHERE email = ?', [email]);
  if (dup.length > 0) throw httpError(400, 'อีเมลนี้ถูกใช้สมัครแล้ว');

  const password_hash = await bcrypt.hash(password, 10);
  // สมัครผ่านหน้าเว็บได้เฉพาะ role customer (บัญชี staff/admin มาจาก seed/แอดมินสร้าง)
  const [result] = await pool.execute(
    "INSERT INTO users (email, password_hash, full_name, phone, role) VALUES (?, ?, ?, ?, 'customer')",
    [email, password_hash, full_name, phone || null]
  );

  const user = { id: result.insertId, role: 'customer', full_name };
  return {
    token: signToken(user),
    user: { id: user.id, email, full_name, role: 'customer' },
  };
}

async function login({ email, password }) {
  if (!isEmail(email) || !isNonEmptyString(password)) {
    throw httpError(400, 'กรุณากรอกอีเมลและรหัสผ่าน');
  }

  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  // ตอบข้อความเดียวกันทั้งกรณีไม่พบอีเมล/รหัสผิด — ไม่ให้เดาได้ว่าอีเมลไหนมีในระบบ
  if (rows.length === 0) throw httpError(401, 'อีเมลหรือรหัสผ่านไม่ถูกต้อง');

  const user = rows[0];
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) throw httpError(401, 'อีเมลหรือรหัสผ่านไม่ถูกต้อง');

  return {
    token: signToken(user),
    user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role },
  };
}

async function getMe(userId) {
  const [rows] = await pool.execute(
    'SELECT id, email, full_name, phone, role FROM users WHERE id = ?',
    [userId]
  );
  if (rows.length === 0) throw httpError(404, 'ไม่พบข้อมูลผู้ใช้');
  return rows[0];
}

// ระบบใช้ JWT แบบ stateless (ไม่มี session เก็บฝั่ง server) จึง "logout" จริง ๆ
// คือให้ฝั่ง client ทิ้ง token ทิ้งไป — ฟังก์ชันนี้มีไว้เผื่ออนาคตอยากทำ token blacklist
// หรือบันทึกเวลาที่ผู้ใช้ออกจากระบบ ตอนนี้แค่ยืนยันว่าคำขอถูกต้อง (ผ่าน verifyToken แล้ว)
async function logout(userId) {
  return { message: 'ออกจากระบบสำเร็จ' };
}

module.exports = { register, login, getMe, logout };