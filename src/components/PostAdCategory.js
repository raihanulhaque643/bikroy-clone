import React from 'react';
import './PostAdCategory.css';
import SellAnItemModal from './SellAnItemModal';

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
            {/* <a href={props.hrefOne}>{props.linkOne}</a> */}
            {/* <button>{props.buttonOne}</button> */}
            <SellAnItemModal name={props.buttonOne} />
            <img className="rightArrow" src="right-arrow.svg" alt=""/>
            </div>
            <div className="linkArrowHolder">
            {/* <a href={props.hrefTwo}>{props.linkTwo}</a> */}
            <button>{props.buttonTwo}</button>
            <img className="rightArrow" src="right-arrow.svg" alt=""/>
            </div>
        </div>
    )
}

export default PostAdCategory;
