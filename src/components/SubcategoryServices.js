import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryServices = () => {

    const history = useHistory();

    const handleBusinessTechnicalServices = () => {
        history.push('/post-ad-form/business-technical-services')
    }

    const handleTravelVisa = () => {
        history.push('/post-ad-form/travel-visa')
    }

    const handleTickets = () => {
        history.push('/post-ad-form/tickets')
    }

    const handleEventsHospitality = () => {
        history.push('/post-ad-form/event-hospitality')
    }

    const handleDomesticPersonal = () => {
        history.push('/post-ad-form/domestic-personal')
    }

    const handleHealthLifestyle = () => {
        history.push('/post-ad-form/health-lifestyle')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleBusinessTechnicalServices()}}>
                <CustomCatButton
                title="Business & Technical Services"
                />
                </button>
                <button onClick={()=>{handleTravelVisa()}}>
                <CustomCatButton
                title="Travel & Visa"
                />
                </button>
                <button onClick={()=>{handleTickets()}}>
                <CustomCatButton
                title="Tickets"
                />
                </button>
                <button onClick={()=>{handleEventsHospitality()}}>
                <CustomCatButton
                title="Events & Hospitality"
                />
                </button>
                <button onClick={()=>{handleDomesticPersonal()}}>
                <CustomCatButton
                title="Domestic & Personal"
                />
                </button>
                <button onClick={()=>{handleHealthLifestyle()}}>
                <CustomCatButton
                title="Health & Lifestyle"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryServices;
