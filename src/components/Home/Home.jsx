import React from 'react';
import Header from '../Header/Header';
import FlashDeals from '../FlashDeals/FlashDeals';
import ProductGallery from '../ProductGallery/ProductGallery';
import { products, flashDeals } from '../../data/products';

function Home() {
  return (
    <div className="home">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a INTEGRADORA SHOP</h1>
          <p className="hero-subtitle">Tu tienda favorita de natación, muebles y regalos</p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => {
              document.querySelector('.flash-deals-section').scrollIntoView({ behavior: 'smooth' });
            }}>
              ⚡ Ver Ofertas Flash
            </button>
            <button className="hero-btn secondary" onClick={() => {
              document.querySelector('.product-gallery-section').scrollIntoView({ behavior: 'smooth' });
            }}>
              🛍️ Ver Productos
            </button>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Envío Gratis</h3>
            <p>En compras mayores a $500</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💳</span>
            <h3>Pago Seguro</h3>
            <p>Múltiples métodos de pago</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎁</span>
            <h3>Personalización</h3>
            <p>Diseños únicos para ti</p>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <FlashDeals deals={flashDeals} />

      {/* Product Gallery */}
      <ProductGallery products={products} />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>INTEGRADORA SHOP</h3>
            <p>Tu tienda de confianza desde 2024</p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📧 contacto@integradorashop.com</p>
            <p>📱 +52 123 456 7890</p>
            <p>📍 Torreón, Coahuila, México</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <a href="#productos">Productos</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#contacto">Contacto</a>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 INTEGRADORA SHOP. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;