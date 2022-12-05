import CategoriesMenu from './components/categories-menu/Categories-menu.component';
import categories from './data/categories.json';

const App = () => {
  return (
    <div>
      <CategoriesMenu categories={categories}/>
    </div>
  );
};

export default App;
