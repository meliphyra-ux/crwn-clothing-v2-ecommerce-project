import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/Product-card.component';

import { CategoriesContext } from '../../contexts/Categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const products = useMemo(
    () => categoriesMap[category],
    [category, categoriesMap]
  );
  return (
    <>
      <h2 className='title'>{category.toUpperCase()}</h2>
      <div className="category-page-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
