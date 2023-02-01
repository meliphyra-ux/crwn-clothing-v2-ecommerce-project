import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

import { StyledShoppingIcon, ItemCount, CartIconContainer} from './cart-icon.styles.js';

const CartIcon = () => {
  const { handleIsCartDropdownOpen, cartCounter } = useContext(CartContext);
  return (
    <CartIconContainer onClick={handleIsCartDropdownOpen}>
      <StyledShoppingIcon />
      <ItemCount>{cartCounter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
