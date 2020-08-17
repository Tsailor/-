import React from 'react';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import '../styles/App.css';

function App() {
  return (
    <div className="app">
         <h2>Shopping Cart Example</h2>
         <hr />
         <ProductContainer />
         <hr />
         <CartContainer />
    </div>
  );
}

export default App;
