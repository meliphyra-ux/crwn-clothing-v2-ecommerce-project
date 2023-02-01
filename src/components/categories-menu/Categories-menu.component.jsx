import { CategoriesContainer } from './categories-menu.styles.js';
import CategoryItem from '../category-item/Category-item.component';

const CategoriesMenu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesMenu;
