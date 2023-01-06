import { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/Button.component';
import { CartContext } from '../../contexts/Cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCard} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
