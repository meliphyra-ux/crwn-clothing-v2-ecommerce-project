import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.js';

import CartItem from '../cart-item/Cart-item.component';
import { CartContext } from '../../contexts/Cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )) : <h2>Cart is empty</h2>}
      </CartItems>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
