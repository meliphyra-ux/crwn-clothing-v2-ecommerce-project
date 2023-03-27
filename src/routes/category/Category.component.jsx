import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/Product-card.component';

import { CategoryPageContainer, Title } from './category.styles.js';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/Spinner.component';

const Category = () => {
  const { category } = useParams();
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading)
  const categoriesMap = useSelector(selectCategoriesMap);
  const products = useMemo(
    () => categoriesMap[category],
    [category, categoriesMap]
  );
  if(isCategoriesLoading){
    return <Spinner />
  }
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
