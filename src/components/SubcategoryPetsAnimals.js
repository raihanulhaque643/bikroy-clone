import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryPetsAnimals = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Pets"
                />
                <CustomCatButton
                title="Farm Animals"
                />
                <CustomCatButton
                title="Pet & Animal Accessories"
                />
                <CustomCatButton
                title="Other Pets & Animals"
                />
            </div>
    </div>
    )
}

export default SubcategoryPetsAnimals;
