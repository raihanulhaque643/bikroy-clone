import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryMobiles = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Mobile Phones"
                />
                <CustomCatButton
                title="Mobile Phone Accessories"
                />
                <CustomCatButton
                title="SIM Cards"
                />
                <CustomCatButton
                title="Mobile Phone Services"
                />
            </div>
    </div>
    )
}

export default SubcategoryMobiles;
