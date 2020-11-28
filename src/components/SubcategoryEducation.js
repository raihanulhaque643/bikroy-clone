import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryEducation = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Textbooks"
                />
                </button>
                <button>
                <CustomCatButton
                title="Tuition"
                />
                </button>
                <button>
                <CustomCatButton
                title="Courses"
                />
                </button>
                <button>
                <CustomCatButton
                title="Study Abroard"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Education"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryEducation;
