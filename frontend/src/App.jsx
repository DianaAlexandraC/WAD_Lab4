import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';

export default function App() {
  const [cart, setCart] = useState([]);

  {/* TODO 1-1: Implement a function that adds items in the cart based on id. Then, go to Product.jsx.
        + TODO 6-1: you should also write the logic for increasing the quantity of a product, 
          if a product is added to the cart multiple times. */}
  function handleAddToCart(product) {

  }
  {/* TODO 4-1: Implement handleRemove(productId) that removes the item from cart, based on id. 
      Then, go to CartItem.jsx */ }
  function handleRemove(productId) {
    
  }

  {/*TODO 5-1: Implement the Checkout button that will clear the cart when pressed. 
      Then, go to CartPage.jsx  */ }
  function handleCheckout() {
    
  }

  {/*TODO 6-2: Compute itemCount — the total number of items across cart entries. */ }
  const itemCount = 0;

  {/* TODO 6-3: Implement a function that changes quantities in the Cart page whenever 
        the user presses on the equivalent buttons. Then, go to CartItem.jsx */ }
  function handleUpdateQty(productId, qty) {

  }

  return (
    <BrowserRouter>
      <Navbar itemCount={itemCount} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={
          <CartPage
            cart={cart}
            onRemove={handleRemove}
            onUpdateQty={handleUpdateQty}
            onCheckout={handleCheckout}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}