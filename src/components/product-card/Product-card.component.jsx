import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selectors.js';

import { ProductCardContainer, Footer } from './product-card.styles.js';
import Button from '../button/Button.component';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => dispatch(addItemToCart(cartItems, product));
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
