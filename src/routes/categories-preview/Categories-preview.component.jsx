import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/Categories.context';

import CategoryPreview from '../../components/category-preview/Category-preview.component';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview title={title} products={products} />;
      })}
      <div className="products-container"></div>
    </>
  );
};
export default CategoriesPreview;
