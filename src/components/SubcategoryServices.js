import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryServices = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Business & Technical Services"
                />
                <CustomCatButton
                title="Travel & Visa"
                />
                <CustomCatButton
                title="Tickets"
                />
                <CustomCatButton
                title="Events & Hospitality"
                />
                <CustomCatButton
                title="Domestic & Personal"
                />
                <CustomCatButton
                title="Health & Lifestyle"
                />
            </div>
    </div>
    )
}

export default SubcategoryServices;
