import React from 'react';
import './CategoryItem.css';

const CategoryItem = (props) => {
    return (
        <div className="categoryItemContainer">
        <div className="categoryItem">
            <div className="categoryItemImage"><img src={props.image} alt=""/></div> 
            <div className="categoryItemName"><div>{props.name}</div></div>
            <div className="categoryItemStock">({props.productStock})</div>
            <div className="categoryItemDescription">{props.description}</div>
        </div>
        </div>
    )
}

export default CategoryItem;
