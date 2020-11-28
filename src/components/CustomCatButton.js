import React from 'react';
import './CustomCatButtonWithImg.css'

const CustomCatButton = (props) => {
    return (
        <div className="modalColumn">
                <div className="modalColumnRow">
                    <span>{props.title}</span>
                </div>
        </div>
    )
}

export default CustomCatButton;
