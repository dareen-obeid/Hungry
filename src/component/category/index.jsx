import React from 'react';
import { Link } from 'react-router-dom';
import  "./category.css"

const Category = (props) => {

    const {category} = props;

    return (
        <Link to={`/category/${category.strCategory}`}>
        <div className="product-card">
          <div className="product-image">
            <img src={category.strCategoryThumb} />
          </div>
          <div>
            <h3>{category.strCategory}</h3>
          </div>
        </div>
        </Link>

      );

};
export default Category;
