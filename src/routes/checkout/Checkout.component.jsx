import { useContext } from 'react'

import { CartContext } from '../../contexts/Cart.context'

import CheckoutItem from '../../components/checkout-item/Checkout-item.component'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems } = useContext(CartContext)
  return (
    <div>
        <div>
          <h3>Product</h3>
          <h3>Description</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
          <h3>Remove</h3>
        </div>
        <div className="checkout-items-container">
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} checkoutItem={cartItem}/>
            ))}
            
        </div>
    </div>
  )
}

export default Checkout