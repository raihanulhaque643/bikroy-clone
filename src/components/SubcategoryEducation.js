import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryEducation = () => {

    const history = useHistory();

    const handleTextbooks = () => {
        history.push('/post-ad-form/education/textbooks')
    }

    const handleTuition = () => {
        history.push('/post-ad-form/education/tuition')
    }

    const handleCourses = () => {
        history.push('/post-ad-form/education/courses')
    }

    const handleStudyAbroad = () => {
        history.push('/post-ad-form/education/study-abroad')
    }

    const handleOtherEducation = () => {
        history.push('/post-ad-form/education/other-education')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleTextbooks()}}>
                <CustomCatButton
                title="Textbooks"
                />
                </button>
                <button onClick={()=>{handleTuition()}}>
                <CustomCatButton
                title="Tuition"
                />
                </button>
                <button onClick={()=>{handleCourses()}}>
                <CustomCatButton
                title="Courses"
                />
                </button>
                <button onClick={()=>{handleStudyAbroad()}}>
                <CustomCatButton
                title="Study Abroard"
                />
                </button>
                <button onClick={()=>{handleOtherEducation()}}>
                <CustomCatButton
                title="Other Education"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryEducation;
