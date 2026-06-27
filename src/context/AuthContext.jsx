import React, { createContext, useState, useEffect } from 'react';
import { INITIAL_USERS } from '../constants/mockData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inicializar mock users si no existen
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(INITIAL_USERS));
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userWithoutPass = { id: foundUser.id, name: foundUser.name, email: foundUser.email, role: foundUser.role };
      setUser(userWithoutPass);
      localStorage.setItem('user', JSON.stringify(userWithoutPass));
      localStorage.setItem('token', 'mock-jwt-token-12345');
      return { success: true };
    }
    return { success: false, message: 'Credenciales inválidas' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
