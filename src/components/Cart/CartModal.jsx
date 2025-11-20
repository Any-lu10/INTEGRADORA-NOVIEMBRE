import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import './CartModal.css';

function CartModal({ isOpen, onClose }) {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setCheckoutOpen(true);
    onClose(); // Cierra el carrito cuando abre el checkout
  };

  return (
    <>
      {/* Overlay */}
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      {/* Cart Modal */}
      <div className={`cart-modal ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Mi Carrito</h2>
          <button className="cart-close" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Tu carrito está vacío</p>
              <p style={{ fontSize: '14px', color: '#999' }}>Agrega productos para comenzar</p>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-image"
                  />
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)} MXN</p>
                    
                    <div className="cart-item-controls">
                      <div className="cart-item-quantity">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Disminuir cantidad"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="cart-item-remove" 
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Eliminar producto"
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="cart-total-label">Total:</span>
              <span className="cart-total-amount">${getTotalPrice().toFixed(2)} MXN</span>
            </div>
            
            <div className="cart-actions">
              <button 
                className="cart-checkout-btn" 
                onClick={handleCheckout}
              >
                🔒 Proceder al Pago
              </button>
              
              <button 
                className="cart-clear-btn" 
                onClick={clearCart}
              >
                🗑️ Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
      />
    </>
  );
}

export default CartModal;