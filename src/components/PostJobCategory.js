import React from 'react';
import './PostAdCategory.css';
import SellAnItemModal from './SellAnItemModal';
import OfferAPropertyModal from './OfferAPropertyModal';
import CustomJobButton from './CustomJobButton';

const PostJobCategory = (props) => {

    const handlePostJobInBikryo = () => {
        alert('link to post job in bikryo form');
    };

    const handlePostJobOverSeas = () => {
        alert('link to post job overseas form');
    };

    return (
        <div className="postAdBodyColumn">
            <div className="postAdBodyColumnHeading"
            style={{borderTop: '1px solid rgb(230, 230, 230)'}}
            >
                <img src={props.titleImage} alt=""/>
                <span>{props.title}</span>
            </div>
            <div className="linkArrowHolder">
            <button onClick={()=>handlePostJobInBikryo()}>
            <CustomJobButton title={props.buttonOne} />
            </button>
            <img className="rightArrow" src="right-arrow.svg" alt=""/>
            </div>
            <div className="linkArrowHolder">
            <button onClick={()=>handlePostJobOverSeas()}>
            <CustomJobButton title={props.buttonTwo} />
            </button>
            <img className="rightArrow" src="right-arrow.svg" alt=""/>
            </div>
        </div>
    )
}

export default PostJobCategory;
