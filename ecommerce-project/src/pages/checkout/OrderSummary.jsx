
import { DeliveryDate } from "./DeliveryDate.jsx";
import { DeliveryOptions } from "./DeliveryOptions.jsx";
import { CartItemDetails } from "./CartItemDetails.jsx";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        
        return (

          <div key={cartItem.productId} className="cart-item-container">
            
        

            <div className="cart-item-details-grid">
            <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem}  />
            </div>
          </div>
        );
      })}

    </div>
  )
}