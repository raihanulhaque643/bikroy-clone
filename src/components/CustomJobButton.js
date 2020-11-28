import React from 'react';
import './CustomCatButtonWithImg.css'

const CustomJobButton = (props) => {
    return (
        <div className="jobColumn">
        {/* <button> */}
                <div className="jobColumnRow">
                    <span>{props.title}</span>
                </div>
        {/* </button> */}
        </div>
    )
}

export default CustomJobButton;
