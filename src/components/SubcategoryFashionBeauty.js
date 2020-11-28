import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryFashionBeauty = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Men's Clothing & Accessories"
                />
                <CustomCatButton
                title="Women's Clothing & Accessories"
                />
                <CustomCatButton
                title="Children's Clothing & Accessories"
                />
                <CustomCatButton
                title="Jewellery"
                />
                <CustomCatButton
                title="Optical Items"
                />
                <CustomCatButton
                title="Watches"
                />
                <CustomCatButton
                title="Bags"
                />
                <CustomCatButton
                title="Wholesale - Bulk"
                />
                <CustomCatButton
                title="Beauty Products"
                />
                <CustomCatButton
                title="Other Items"
                />
            </div>
    </div>
    )
}

export default SubcategoryFashionBeauty;
