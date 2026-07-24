import './OrdersPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      let response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    };
    fetchOrderData();
   
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
      
      <OrdersGrid orders = {orders} />
        
      </div>
    </>
  );
}