import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom'

import { fetchCategoriesStart } from '../../store/categories/categories.action';

import CategoriesPreview from '../categories-preview/Categories-preview.component';
import Category from '../category/Category.component';

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchCategoriesStart())
  }, [dispatch])
  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
  );
};
export default Shop;
