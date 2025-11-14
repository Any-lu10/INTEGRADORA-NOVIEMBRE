import React, { useState } from 'react';
import AuthModal from './AuthModal';

function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="login-btn"
        onClick={() => setIsModalOpen(true)}
      >
        👤 Iniciar Sesión
      </button>

      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default LoginButton;