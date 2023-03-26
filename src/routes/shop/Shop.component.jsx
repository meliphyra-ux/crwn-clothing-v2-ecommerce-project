import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.action';

import CategoriesPreview from '../categories-preview/Categories-preview.component';
import Category from '../category/Category.component';

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch(setCategories(categories))
    }
    getCategoriesMap()
  }, [dispatch])
  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
  );
};
export default Shop;
