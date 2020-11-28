import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryFashionBeauty = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Men's Clothing & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Women's Clothing & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Children's Clothing & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Jewellery"
                />
                </button>
                <button>
                <CustomCatButton
                title="Optical Items"
                />
                </button>
                <button>
                <CustomCatButton
                title="Watches"
                />
                </button>
                <button>
                <CustomCatButton
                title="Bags"
                />
                </button>
                <button>
                <CustomCatButton
                title="Wholesale - Bulk"
                />
                </button>
                <button>
                <CustomCatButton
                title="Beauty Products"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryFashionBeauty;
