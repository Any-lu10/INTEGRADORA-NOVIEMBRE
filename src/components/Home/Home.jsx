import React from 'react';
import Header from '../Header/Header';

function Home() {
  return (
    <div className="home">
      <Header />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a INTEGRADORA SHOP</h1>
          <p>Tu tienda favorita de natación, muebles y regalos</p>
        </div>
      </section>

      <section className="product-gallery">
        <h2>Nuestros Productos</h2>
        <p>Productos próximamente...</p>
      </section>

      <footer className="footer">
        <p>© 2025 INTEGRADORA SHOP - Ana Luisa Martínez Rentería</p>
      </footer>
    </div>
  );
}

export default Home;