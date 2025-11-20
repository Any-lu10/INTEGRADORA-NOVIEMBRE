import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { items: cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Teléfono debe tener 10 dígitos';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es requerida';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es requerida';
    }

    const postalCodeRegex = /^\d{5}$/;
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'El código postal es requerido';
    } else if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = 'Código postal debe tener 5 dígitos';
    }

    if (formData.paymentMethod === 'card') {
      const cardRegex = /^\d{16}$/;
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'El número de tarjeta es requerido';
      } else if (!cardRegex.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Número de tarjeta inválido';
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = 'El nombre en la tarjeta es requerido';
      }

      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = 'La fecha de expiración es requerida';
      } else if (!expiryRegex.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Formato: MM/AA';
      }

      const cvvRegex = /^\d{3,4}$/;
      if (!formData.cvv.trim()) {
        newErrors.cvv = 'El CVV es requerido';
      } else if (!cvvRegex.test(formData.cvv)) {
        newErrors.cvv = 'CVV inválido (3-4 dígitos)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ORD-${timestamp}-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const orderNum = generateOrderNumber();
      setOrderNumber(orderNum);
      setOrderCompleted(true);
      setIsProcessing(false);
      
      setTimeout(() => {
        clearCart();
        console.log('Email de confirmación enviado a:', formData.email);
      }, 2000);
    }, 2500);
  };

  const handleCloseComplete = () => {
    setOrderCompleted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      paymentMethod: 'card'
    });
    onClose();
  };

  if (!isOpen) return null;

  if (orderCompleted) {
    return (
      <div className="checkout-overlay" onClick={handleCloseComplete}>
        <div className="checkout-modal success-modal" onClick={(e) => e.stopPropagation()}>
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h2>¡Pedido Confirmado!</h2>
            <p className="order-number">Número de orden: <strong>{orderNumber}</strong></p>
            <div className="success-details">
              <p>Tu pedido ha sido procesado exitosamente</p>
              <p>Recibirás un email de confirmación en:</p>
              <p className="email-highlight">{formData.email}</p>
              <div className="order-summary">
                <h3>Resumen del Pedido</h3>
                <p><strong>Total:</strong> ${getTotalPrice().toFixed(2)} MXN</p>
                <p><strong>Artículos:</strong> {cartItems.length}</p>
                <p><strong>Método de pago:</strong> {formData.paymentMethod === 'card' ? 'Tarjeta' : 'Transferencia'}</p>
              </div>
            </div>
            <button className="btn-primary" onClick={handleCloseComplete}>
              ¡Perfecto! 🎉
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="checkout-header">
          <h2>💳 Finalizar Compra</h2>
          <button className="checkout-close" onClick={onClose}>×</button>
        </div>

        <div className="checkout-content">
          <div className="order-summary-box">
            <h3>📦 Resumen del Pedido</h3>
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="order-item-info">
                    <p className="order-item-name">{item.name}</p>
                    <p className="order-item-quantity">Cantidad: {item.quantity}</p>
                  </div>
                  <p className="order-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>Total:</span>
              <span className="total-amount">${getTotalPrice().toFixed(2)} MXN</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h3>📋 Información de Contacto</h3>
              
              <div className="form-group">
                <label htmlFor="fullName">Nombre Completo *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Juan Pérez García"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="5512345678"
                    maxLength="10"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>📍 Dirección de Envío</h3>
              
              <div className="form-group">
                <label htmlFor="address">Dirección *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error' : ''}
                  placeholder="Calle, Número, Colonia"
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ciudad *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'error' : ''}
                    placeholder="Ciudad de México"
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="postalCode">Código Postal *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={errors.postalCode ? 'error' : ''}
                    placeholder="12345"
                    maxLength="5"
                  />
                  {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>💰 Método de Pago</h3>
              
              <div className="payment-methods">
                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <span>💳 Tarjeta de Crédito/Débito</span>
                </label>

                <label className={`payment-option ${formData.paymentMethod === 'transfer' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === 'transfer'}
                    onChange={handleChange}
                  />
                  <span>🏦 Transferencia Bancaria</span>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group">
                    <label htmlFor="cardNumber">Número de Tarjeta *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={errors.cardNumber ? 'error' : ''}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                    {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={errors.cardName ? 'error' : ''}
                      placeholder="JUAN PEREZ"
                    />
                    {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Fecha de Expiración *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className={errors.expiryDate ? 'error' : ''}
                        placeholder="MM/AA"
                        maxLength="5"
                      />
                      {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className={errors.cvv ? 'error' : ''}
                        placeholder="123"
                        maxLength="4"
                      />
                      {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'transfer' && (
                <div className="transfer-info">
                  <p><strong>Datos para transferencia:</strong></p>
                  <p>CLABE: 012345678901234567</p>
                  <p>Banco: BBVA</p>
                  <p>Cuenta: 0123456789</p>
                  <p>Titular: INTEGRADORA SHOP SA DE CV</p>
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="btn-checkout-submit"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="spinner"></span>
                  Procesando pago...
                </>
              ) : (
                <>
                  🔒 Confirmar Pedido - ${getTotalPrice().toFixed(2)} MXN
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;