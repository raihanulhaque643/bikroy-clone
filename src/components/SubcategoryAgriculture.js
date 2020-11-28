import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryAgriculture = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Crops, Seeds Plants"
                />
                <CustomCatButton
                title="Farming Tools & Machinery"
                />
                <CustomCatButton
                title="Other Agriculture"
                />
            </div>
    </div>
    )
}

export default SubcategoryAgriculture;
