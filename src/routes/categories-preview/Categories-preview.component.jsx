import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/Category-preview.component';
import Spinner from '../../components/spinner/Spinner.component';


const CategoriesPreview = () => {
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading)
  const categoriesMap = useSelector(selectCategoriesMap);
  if(isCategoriesLoading){
    return <Spinner />
  }
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};
export default CategoriesPreview;
