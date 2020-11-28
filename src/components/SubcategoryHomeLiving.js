import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryHomeLiving = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Living Room Furniture"
                />
                <CustomCatButton
                title="Kitchen & Dining Furniture"
                />
                <CustomCatButton
                title="Bedroom Furniture"
                />
                <CustomCatButton
                title="Office & Shop Furniture"
                />
                <CustomCatButton
                title="Children's Furniture"
                />
                <CustomCatButton
                title="ACs & Home Electronics"
                />
                <CustomCatButton
                title="Home Appliances"
                />
                <CustomCatButton
                title="Household Items"
                />
                <CustomCatButton
                title="Home Textiles & Decoration"
                />
            </div>
    </div>
    )
}

export default SubcategoryHomeLiving;
