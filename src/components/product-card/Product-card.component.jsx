import { useContext } from 'react';
import { ProductCardContainer, Footer } from './product-card.styles.js';
import Button from '../button/Button.component';
import { CartContext } from '../../contexts/Cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={addProductToCard} buttonType="inverted">
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
