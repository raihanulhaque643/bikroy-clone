import React from 'react';
import './PostAdCategory.css';
import SellAnItem from './SellAnItem';

const PostAdCategory = (props) => {
    return (
        <div className="postAdBodyColumn">
            <div className="postAdBodyColumnHeading"
            style={{borderTop: '1px solid rgb(230, 230, 230)'}}
            >
                <img src={props.titleImage} alt=""/>
                <span>{props.title}</span>
            </div>
            <div className="linkArrowHolder">
            <SellAnItem name={props.buttonOne} />
            </div>
        </div>
    )
}

export default PostAdCategory;
