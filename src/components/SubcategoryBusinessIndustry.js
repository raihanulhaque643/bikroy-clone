import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryBusinessIndustry = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Office Supplies & Stationary"
                />
                <CustomCatButton
                title="Safety & Security"
                />
                <CustomCatButton
                title="Industry Machinery & Tools"
                />
                <CustomCatButton
                title="Raw Materials & Industrial Supplies"
                />
                <CustomCatButton
                title="Licences, Titles & Tenders"
                />
                <CustomCatButton
                title="Medical Equipment & Supplies"
                />
                <CustomCatButton
                title="Other Business & Industrial Items"
                />
            </div>
    </div>
    )
}

export default SubcategoryBusinessIndustry;
