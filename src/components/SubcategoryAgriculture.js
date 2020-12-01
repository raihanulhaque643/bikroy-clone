import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryAgriculture = () => {

    const history = useHistory();

    const handleCropsSeedsPlants = () => {
        history.push('/post-ad-form/crops-seeds-plants')
    }

    const handleFarmingToolsMachinery = () => {
        history.push('/post-ad-form/farming-tools-machinery')
    }

    const handleOtherAgriculture = () => {
        history.push('/post-ad-form/other-agriculture')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleCropsSeedsPlants()}}>
                <CustomCatButton
                title="Crops, Seeds Plants"
                />
            </button>
            <button onClick={()=>{handleFarmingToolsMachinery()}}>
                <CustomCatButton
                title="Farming Tools & Machinery"
                />
            </button>
            <button onClick={()=>{handleOtherAgriculture()}}>
                <CustomCatButton
                title="Other Agriculture"
                />
            </button>
            </div>
    </div>
    )
}

export default SubcategoryAgriculture;
