import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryMobiles = () => {

    const history = useHistory();

    const handleMobilePhones = () => {
        history.push('/post-ad-form/mobiles/mobile-phones')
    }

    const handleMobilePhoneAccessories = () => {
        history.push('/post-ad-form/mobiles/mobile-phone-accessories')
    }

    const handleSimCards = () => {
        history.push('/post-ad-form/mobiles/sim-cards')
    }

    const handleMobilePhoneServices = () => {
        history.push('/post-ad-form/mobiles/mobile-phone-services')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleMobilePhones()}}>
                <CustomCatButton
                title="Mobile Phones"
                />
                </button>
                <button onClick={()=>{handleMobilePhoneAccessories()}}>
                <CustomCatButton
                title="Mobile Phone Accessories"
                />
                </button>
                <button onClick={()=>{handleSimCards()}}>
                <CustomCatButton
                title="SIM Cards"
                />
                </button>
                <button onClick={()=>{handleMobilePhoneServices()}}>
                <CustomCatButton
                title="Mobile Phone Services"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryMobiles;
