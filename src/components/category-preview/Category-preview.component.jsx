import ProductCard from '../product-card/Product-card.component';
import { Link } from 'react-router-dom';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
