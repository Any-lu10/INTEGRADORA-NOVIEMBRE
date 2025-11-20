import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

function ProductGallery({ products }) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'natacion', name: '🏊 Natación' },
    { id: 'oficina', name: '💺 Oficina' },
    { id: 'regalos', name: '🎁 Regalos' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-gallery-section">
      <h2 className="gallery-title">Nuestros Productos</h2>
      
      {/* Filtros */}
      <div className="gallery-filters">
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid de productos */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="no-products">No se encontraron productos</p>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.stock < 10 && (
          <span className="low-stock-badge">¡Últimas unidades!</span>
        )}
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price-section">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <span className="product-stock">Stock: {product.stock}</span>
          </div>
          
          <button 
            className="add-to-cart-btn product"
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image
            })}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? '🛒 Agregar' : '❌ Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;