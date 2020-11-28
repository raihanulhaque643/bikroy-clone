import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';


const SubcategoryElectronics = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Desktop Computers"
                />
                <CustomCatButton
                title="Laptops"
                />
                <CustomCatButton
                title="Laptop & Computer Accessories"
                />
                <CustomCatButton
                title="Tablets & Accessories"
                />
                <CustomCatButton
                title="Cameras, Camcorders & Accessories"
                />
                <CustomCatButton
                title="Audio & Sound Systems"
                />
                <CustomCatButton
                title="Video Game Consoles & Accessories"
                />
                <CustomCatButton
                title="Photocopiers"
                />
                <CustomCatButton
                title="Other Electronics"
                />
            </div>
    </div>
    )
}

export default SubcategoryElectronics;
