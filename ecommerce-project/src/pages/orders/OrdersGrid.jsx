import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrderHeader } from "./OrderHeader";
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import { Fragment } from "react";
import { NavLink } from "react-router";


export function OrdersGrid ({orders}) {
  return (
     <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">

                <OrderHeader order={order} />

                <OrderDetailsGrid order = {order} />
              </div>
            );
          })}
        </div>
  )
}