import CategoriesMenu from '../../components/categories-menu/Categories-menu.component'
import categories from '../../data/categories.json'

const Home = () => {
  return (
    <div>
      <CategoriesMenu categories={categories}/>
    </div>
  )
}

export default Home