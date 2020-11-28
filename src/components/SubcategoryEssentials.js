import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryEssentials = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Grocery"
                />
                </button>
                <button>
                <CustomCatButton
                title="Fruits & Vegetables"
                />
                </button>
                <button>
                <CustomCatButton
                title="Meat & Seafood"
                />
                </button>
                <button>
                <CustomCatButton
                title="Baby Products"
                />
                </button>
                <button>
                <CustomCatButton
                title="Healthcare"
                />
                </button>
                <button>
                <CustomCatButton
                title="Household"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Essentials"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryEssentials;
