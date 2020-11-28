import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryProperty = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <CustomCatButton
            title="Apartments & Flats"
            />
            <CustomCatButton
            title="New Development"
            />
            <CustomCatButton
            title="Houses"
            />
            <CustomCatButton
            title="Plots & Land"
            />
            <CustomCatButton
            title="Garages"
            />
            <CustomCatButton
            title="Commercial Property"
            />
            <CustomCatButton
            title="Property Tools & Services"
            />
            </div>
    </div>
    )
}

export default SubcategoryProperty;
