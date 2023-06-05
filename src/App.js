import React from 'react'
import Home from './pages/home/home';
import Product from './pages/product/product';
import Payment from './pages/payment/Payment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App