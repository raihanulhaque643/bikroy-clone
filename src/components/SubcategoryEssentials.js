import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryEssentials = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Grocery"
                />
                <CustomCatButton
                title="Fruits & Vegetables"
                />
                <CustomCatButton
                title="Meat & Seafood"
                />
                <CustomCatButton
                title="Baby Products"
                />
                <CustomCatButton
                title="Healthcare"
                />
                <CustomCatButton
                title="Household"
                />
                <CustomCatButton
                title="Other Essentials"
                />
            </div>
    </div>
    )
}

export default SubcategoryEssentials;
