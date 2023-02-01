import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/Product-card.component';

import { CategoriesContext } from '../../contexts/Categories.context';

import { CategoryPageContainer, Title } from './category.styles.js';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const products = useMemo(
    () => categoriesMap[category],
    [category, categoriesMap]
  );
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryPageContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPageContainer>
    </>
  );
};

export default Category;
