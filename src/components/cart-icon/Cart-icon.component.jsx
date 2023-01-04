import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/Cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { handleIsCartDropdownOpen } = useContext(CartContext)
  return (
    <div className="cart-icon-container" onClick={() => handleIsCartDropdownOpen()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
