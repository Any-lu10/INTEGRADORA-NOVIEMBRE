import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartModal from './CartModal';

function CartButton() {
  const { getTotalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="cart-button"
        onClick={() => setIsModalOpen(true)}
      >
        🛒
        {getTotalItems() > 0 && (
          <span className="cart-badge">{getTotalItems()}</span>
        )}
      </button>

      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default CartButton;