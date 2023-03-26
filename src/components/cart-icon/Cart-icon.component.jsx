import { useDispatch, useSelector } from 'react-redux';

import {
  StyledShoppingIcon,
  ItemCount,
  CartIconContainer,
} from './cart-icon.styles.js';
import {
  selectCartCount,
  selectIsCartDropdownOpen,
} from '../../store/cart/cart.selectors';
import { handleIsCartDropdownOpen } from '../../store/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCounter = useSelector(selectCartCount);
  const isCartDropdownOpen = useSelector(selectIsCartDropdownOpen);

  const handleCartDropdown = () =>
    dispatch(handleIsCartDropdownOpen(!isCartDropdownOpen));
  return (
    <CartIconContainer onClick={handleCartDropdown}>
      <StyledShoppingIcon />
      <ItemCount>{cartCounter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
