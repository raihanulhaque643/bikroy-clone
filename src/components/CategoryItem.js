import React from 'react';
import './CategoryItem.css'

const CategoryItem = (props) => {
    return (
        <div>
            {props.name} <br/>
            {props.productStock} <br/> 
            {props.description} <br/>
            <img src={props.image} alt=""/> <br/>
        </div>
    )
}

export default CategoryItem;
