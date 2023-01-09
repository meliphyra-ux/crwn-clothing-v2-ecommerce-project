import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/Cart.context';

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, quantity, price } = checkoutItem;
 
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <h2>{name}</h2>
      <div>
        <span onClick={() => removeItemFromCart(checkoutItem)}>{'<'}</span>
        <h2>{quantity}</h2>
        <span onClick={() => addItemToCart(checkoutItem)}>{'>'}</span>
      </div>
      <h2>{price}</h2>
      <span onClick={() => clearItemFromCart(checkoutItem)}>x</span>
    </div>
  );
};

export default CheckoutItem;
