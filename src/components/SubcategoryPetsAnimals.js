import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryPetsAnimals = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Pets"
                />
                </button>
                <button>
                <CustomCatButton
                title="Farm Animals"
                />
                </button>
                <button>
                <CustomCatButton
                title="Pet & Animal Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Pets & Animals"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryPetsAnimals;
