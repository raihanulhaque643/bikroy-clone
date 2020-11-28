import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryEducation = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Textbooks"
                />
                <CustomCatButton
                title="Tuition"
                />
                <CustomCatButton
                title="Courses"
                />
                <CustomCatButton
                title="Study Abroard"
                />
                <CustomCatButton
                title="Other Education"
                />
            </div>
    </div>
    )
}

export default SubcategoryEducation;
