import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin } from '../api/auth.api';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isRestoring, setIsRestoring] = useState(true);

  // กู้คืน session จาก localStorage ตอนเปิดแอปครั้งแรก
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsRestoring(false);
  }, []);

  const login = async (email, password) => {
    const response = await apiLogin(email, password);
    if (response.success) {
      const { token: apiToken, user: apiUser } = response.data;
      // Key 'token' และ 'user' ต้องตรงกับที่กำหนดใน spec
      localStorage.setItem('token', apiToken);
      localStorage.setItem('user', JSON.stringify(apiUser));
      setToken(apiToken);
      setUser(apiUser);
    }
    return response; // ส่ง response กลับไปให้ component จัดการ (error/success)
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    isLoggedIn: !!token,
    login,
    logout,
  };

  // ยังไม่ render children จนกว่าจะกู้คืน session เสร็จ
  // เพื่อป้องกันการ redirect ผิดพลาดใน ProtectedRoute
  if (isRestoring) {
    return null; // หรือจะแสดงหน้า Loading กลางจอภาพก็ได้
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
