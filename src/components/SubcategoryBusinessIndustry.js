import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryBusinessIndustry = () => {

    const history = useHistory();

    const handleOfficeSuppliesStationary = () => {
        history.push('/post-ad-form/business-industry/office-supplies-stationary')
    }

    const handleSafetySecurity = () => {
        history.push('/post-ad-form/business-industry/safety-security')
    }

    const handleIndustryMachineryTools = () => {
        history.push('/post-ad-form/business-industry/industry-machinery-tools')
    }

    const handleRawMaterialsIndustrialSupplies = () => {
        history.push('/post-ad-form/business-industry/raw-materials-industrial-supplies')
    }

    const handleLicensesTitlesTenders = () => {
        history.push('/post-ad-form/business-industry/licences-titles-tenders')
    }

    const handleMedicalEquipmentSupplies = () => {
        history.push('/post-ad-form/business-industry/medical-equipment-supplies')
    }

    const handleOtherBusinessIndustrialItems = () => {
        history.push('/post-ad-form/business-industry/other-business-industrial-items')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleOfficeSuppliesStationary()}}>
                <CustomCatButton
                title="Office Supplies & Stationary"
                />
                </button>
                <button onClick={()=>{handleSafetySecurity()}}>
                <CustomCatButton
                title="Safety & Security"
                />
                </button>
                <button onClick={()=>{handleIndustryMachineryTools()}}>
                <CustomCatButton
                title="Industry Machinery & Tools"
                />
                </button>
                <button onClick={()=>{handleRawMaterialsIndustrialSupplies()}}>
                <CustomCatButton
                title="Raw Materials & Industrial Supplies"
                />
                </button>
                <button onClick={()=>{handleLicensesTitlesTenders()}}>
                <CustomCatButton
                title="Licences, Titles & Tenders"
                />
                </button>
                <button onClick={()=>{handleMedicalEquipmentSupplies()}}>
                <CustomCatButton
                title="Medical Equipment & Supplies"
                />
                </button>
                <button onClick={()=>{handleOtherBusinessIndustrialItems()}}>
                <CustomCatButton
                title="Other Business & Industrial Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryBusinessIndustry;
