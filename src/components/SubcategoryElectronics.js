import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';


const SubcategoryElectronics = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Desktop Computers"
                />
                </button>
                <button>
                <CustomCatButton
                title="Laptops"
                />
                </button>
                <button>
                <CustomCatButton
                title="Laptop & Computer Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Tablets & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Cameras, Camcorders & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Audio & Sound Systems"
                />
                </button>
                <button>
                <CustomCatButton
                title="Video Game Consoles & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Photocopiers"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Electronics"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryElectronics;
