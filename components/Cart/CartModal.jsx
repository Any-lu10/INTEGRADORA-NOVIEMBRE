import React from 'react';
import { useCart } from '../../context/CartContext';

function CartModal({ isOpen, onClose }) {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Mi Carrito</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p style={{fontSize: '48px'}}>🛒</p>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="price">${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('Checkout próximamente')}>
              Proceder al Pago
            </button>
            <button className="clear-btn" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;