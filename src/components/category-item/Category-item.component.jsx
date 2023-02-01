import React from 'react';
import { CategoryContainer, CategoryBodyContainer, BackgroundImage } from './category-item.styles.js';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryContainer>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CategoryBodyContainer>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
