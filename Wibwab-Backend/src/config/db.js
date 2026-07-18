// config/db.js — mysql2 connection pool (charset utf8mb4 — ภาษาไทยต้องรอด ตามกติกาข้อ 6)
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'wibwab',
  password: process.env.DB_PASSWORD || 'wibwab_pass',
  database: process.env.DB_NAME || 'wibwab_db',
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
