import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/Cart.context';

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, quantity, price } = checkoutItem;

  const addItemHandler = () => addItemToCart(checkoutItem);

  const removeItemHandler = () => removeItemFromCart(checkoutItem);

  const clearItemHandler = () => clearItemFromCart(checkoutItem);

  return (
    <div className="checkout-item-container">
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
      <div
        className="remove-button"
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;