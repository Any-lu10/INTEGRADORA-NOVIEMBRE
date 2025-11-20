import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

function FlashDeals({ deals }) {
  const { addToCart } = useCart();

  return (
    <div className="flash-deals-section">
      <div className="flash-deals-header">
        <h2>⚡ OFERTAS FLASH ⚡</h2>
        <p>¡Aprovecha estas ofertas por tiempo limitado!</p>
      </div>
      
      <div className="flash-deals-grid">
        {deals.map(deal => (
          <FlashDealCard key={deal.id} deal={deal} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

function FlashDealCard({ deal, addToCart }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(deal.endDate).getTime() - now;

      if (distance < 0) {
        setTimeLeft('¡TERMINADA!');
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [deal.endDate]);

  return (
    <div className="flash-deal-card">
      <div className="flash-deal-badge">-{deal.discount}%</div>
      <div className="flash-deal-timer">⏰ {timeLeft}</div>
      
      <img src={deal.image} alt={deal.name} className="flash-deal-image" />
      
      <div className="flash-deal-info">
        <h3>{deal.name}</h3>
        
        <div className="flash-deal-prices">
          <span className="original-price">${deal.originalPrice.toFixed(2)}</span>
          <span className="discount-price">${deal.discountPrice.toFixed(2)}</span>
        </div>
        
        <div className="flash-deal-stock">
          ¡Solo {deal.stock} disponibles!
        </div>
        
        <button 
          className="add-to-cart-btn flash"
          onClick={() => addToCart({
            id: deal.id,
            name: deal.name,
            price: deal.discountPrice,
            image: deal.image
          })}
        >
          🔥 Comprar Ahora
        </button>
      </div>
    </div>
  );
}

export default FlashDeals;