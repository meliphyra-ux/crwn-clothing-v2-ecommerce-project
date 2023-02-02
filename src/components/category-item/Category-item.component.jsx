import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryContainer, CategoryBodyContainer, BackgroundImage } from './category-item.styles.js';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  return (
      <CategoryContainer as={Link} to={route}>
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
