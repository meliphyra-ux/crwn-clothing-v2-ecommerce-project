import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button.component';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/Cart-item.component';
import { CartContext } from '../../contexts/Cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.length > 0 ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )) : <h2>Cart is empty</h2>}
      </div>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
