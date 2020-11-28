import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryAgriculture = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Crops, Seeds Plants"
                />
            </button>
            <button>
                <CustomCatButton
                title="Farming Tools & Machinery"
                />
            </button>
            <button>
                <CustomCatButton
                title="Other Agriculture"
                />
            </button>
            </div>
    </div>
    )
}

export default SubcategoryAgriculture;
