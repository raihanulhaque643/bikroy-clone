import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryMobiles = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Mobile Phones"
                />
                </button>
                <button>
                <CustomCatButton
                title="Mobile Phone Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="SIM Cards"
                />
                </button>
                <button>
                <CustomCatButton
                title="Mobile Phone Services"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryMobiles;
