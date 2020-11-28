import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryHobbiesSportsKids = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Musical Instruments"
                />
                <CustomCatButton
                title="Sports"
                />
                <CustomCatButton
                title="Fitness & Gym"
                />
                <CustomCatButton
                title="Music, Books & Movies"
                />
                <CustomCatButton
                title="Children's Items"
                />
                <CustomCatButton
                title="Other Hobby, Sports & Kids Items"
                />
            </div>
    </div>
    )
}

export default SubcategoryHobbiesSportsKids;
