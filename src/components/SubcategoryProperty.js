import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryProperty = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
            <CustomCatButton
            title="Apartments & Flats"
            />
            </button>
            <button>
            <CustomCatButton
            title="New Development"
            />
            </button>
            <button>
            <CustomCatButton
            title="Houses"
            />
            </button>
            <button>
            <CustomCatButton
            title="Plots & Land"
            />
            </button>
            <button>
            <CustomCatButton
            title="Garages"
            />
            </button>
            <button>
            <CustomCatButton
            title="Commercial Property"
            />
            </button>
            <button>
            <CustomCatButton
            title="Property Tools & Services"
            />
            </button>
            </div>
    </div>
    )
}

export default SubcategoryProperty;
