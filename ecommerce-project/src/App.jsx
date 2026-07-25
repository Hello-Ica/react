import {Routes, Route} from 'react-router';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {HomePage} from './pages/home/HomePage'
import { OrdersPage } from './pages/orders/OrdersPage';
import { Tracking } from './pages/Tracking';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { NotFound } from './pages/NotFound';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
   const fetchAppData = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
   };

    fetchAppData();
  
  }, []);
  return (
    <Routes>
      <Route path = "/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element = {<CheckoutPage cart={cart} />} />
      <Route path="orders" element = {<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element = {<Tracking cart = {cart} />} />
      <Route path="*" element = {<NotFound />} />
    </Routes>
  )
}

export default App
