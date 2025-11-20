import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './components/Home/Home';
import './styles/global.css';
import './styles/cart.css';
import './styles/dark-mode.css';
import './styles/modal.css';
import './styles/flash-deals.css';
import './styles/product-gallery.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;