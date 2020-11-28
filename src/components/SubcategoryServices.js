import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryServices = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Business & Technical Services"
                />
                </button>
                <button>
                <CustomCatButton
                title="Travel & Visa"
                />
                </button>
                <button>
                <CustomCatButton
                title="Tickets"
                />
                </button>
                <button>
                <CustomCatButton
                title="Events & Hospitality"
                />
                </button>
                <button>
                <CustomCatButton
                title="Domestic & Personal"
                />
                </button>
                <button>
                <CustomCatButton
                title="Health & Lifestyle"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryServices;
