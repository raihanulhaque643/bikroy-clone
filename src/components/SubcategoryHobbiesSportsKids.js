import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryHobbiesSportsKids = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Musical Instruments"
                />
                </button>
                <button>
                <CustomCatButton
                title="Sports"
                />
                </button>
                <button>
                <CustomCatButton
                title="Fitness & Gym"
                />
                </button>
                <button>
                <CustomCatButton
                title="Music, Books & Movies"
                />
                </button>
                <button>
                <CustomCatButton
                title="Children's Items"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Hobby, Sports & Kids Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryHobbiesSportsKids;
