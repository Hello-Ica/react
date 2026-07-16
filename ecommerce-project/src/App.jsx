import {Routes, Route} from 'react-router';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {HomePage} from './pages/HomePage'
import { OrdersPage } from './pages/OrdersPage';
import { Tracking } from './pages/Tracking';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { NotFound } from './pages/NotFound';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
   axios.get('/api/cart-items?expand=product')
      .then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route path = "/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element = {<CheckoutPage cart={cart} />} />
      <Route path="orders" element = {<OrdersPage />} />
      <Route path="tracking" element = {<Tracking />} />
      <Route path="*" element = {<NotFound />} />
    </Routes>
  )
}

export default App
