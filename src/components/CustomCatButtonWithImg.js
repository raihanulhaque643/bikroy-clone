import React from 'react';
import './CustomCatButtonWithImg.css';

const CustomCatButtonWithImg = (props) => {
    return (
        <div className="modalColumn">
            <button>
                <div className="modalColumnRow">
                    <img src={props.image} alt=""/>
                    <span>{props.title}</span>
                    <img
                    style={{marginLeft: 'auto', opacity:'0.5'}}
                     src="right-arrow.svg" alt=""/>
                </div>
            </button>
        </div>
    )
}

export default CustomCatButtonWithImg;
