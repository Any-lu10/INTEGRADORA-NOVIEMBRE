import React from 'react';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import CartButton from '../Cart/CartButton';
import LoginButton from '../Auth/LoginButton';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

function Header() {
  const { currentUser, isAuthenticated, logout } = useAuth();

  return (
    <header className="main-header">
      <div className="header-container">
        <h1>INTEGRADORA SHOP</h1>
        
        <div className="header-actions">
          <DarkModeToggle />
          <CartButton />
          
          {isAuthenticated ? (
            <div className="user-info">
              <span>Hola, {currentUser.username}</span>
              <button onClick={logout} className="logout-btn">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;