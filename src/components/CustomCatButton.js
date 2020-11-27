import React from 'react';
import './CustomCatButtonWithImg.css'

const CustomCatButton = (props) => {
    return (
        <div className="modalColumn">
            <button>
                <div className="modalColumnRow">
                    <span>{props.title}</span>
                </div>
            </button>
        </div>
    )
}

export default CustomCatButton;
