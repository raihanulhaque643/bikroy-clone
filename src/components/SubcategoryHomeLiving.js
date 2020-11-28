import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryHomeLiving = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Living Room Furniture"
                />
                </button>
                <button>
                <CustomCatButton
                title="Kitchen & Dining Furniture"
                />
                </button>
                <button>
                <CustomCatButton
                title="Bedroom Furniture"
                />
                </button>
                <button>
                <CustomCatButton
                title="Office & Shop Furniture"
                />
                </button>
                <button>
                <CustomCatButton
                title="Children's Furniture"
                />
                </button>
                <button>
                <CustomCatButton
                title="ACs & Home Electronics"
                />
                </button>
                <button>
                <CustomCatButton
                title="Home Appliances"
                />
                </button>
                <button>
                <CustomCatButton
                title="Household Items"
                />
                </button>
                <button>
                <CustomCatButton
                title="Home Textiles & Decoration"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryHomeLiving;
