import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selectors.js';

import { RemoveButton, CheckoutItemContainer } from './checkout-item.styles.js';

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, quantity, price } = checkoutItem;

  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
