import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryBusinessIndustry = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Office Supplies & Stationary"
                />
                </button>
                <button>
                <CustomCatButton
                title="Safety & Security"
                />
                </button>
                <button>
                <CustomCatButton
                title="Industry Machinery & Tools"
                />
                </button>
                <button>
                <CustomCatButton
                title="Raw Materials & Industrial Supplies"
                />
                </button>
                <button>
                <CustomCatButton
                title="Licences, Titles & Tenders"
                />
                </button>
                <button>
                <CustomCatButton
                title="Medical Equipment & Supplies"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Business & Industrial Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryBusinessIndustry;
