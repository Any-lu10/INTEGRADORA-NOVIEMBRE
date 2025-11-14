// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('integradora_users');
    const savedCurrentUser = localStorage.getItem('integradora_current_user');
    
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));
  }, []);

  const register = (username, email, password) => {
    if (!validateEmail(email)) {
      return { success: false, message: 'Email inválido' };
    }
    
    if (!validatePassword(password)) {
      return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }
    
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'El email ya está registrado' };
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password: btoa(password),
      createdAt: new Date().toISOString()
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('integradora_users', JSON.stringify(updatedUsers));
    
    login(email, password);
    return { success: true, message: '¡Registro exitoso!' };
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === btoa(password));
    
    if (user) {
      const userData = { id: user.id, username: user.username, email: user.email };
      setCurrentUser(userData);
      localStorage.setItem('integradora_current_user', JSON.stringify(userData));
      return { success: true, message: `¡Bienvenido, ${user.username}!` };
    }
    
    return { success: false, message: 'Email o contraseña incorrectos' };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('integradora_current_user');
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    register,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export default AuthContext;