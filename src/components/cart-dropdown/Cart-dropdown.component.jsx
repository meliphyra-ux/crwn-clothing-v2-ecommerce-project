import { useContext } from 'react'

import Button from '../button/Button.component';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/Cart-item.component';
import { CartContext } from '../../contexts/Cart.context'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map(item => <CartItem cartItem={item} />)}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
