import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryHomeLiving = () => {

    const history = useHistory();

    const handleLivingRoomFurniture = () => {
        history.push('/post-ad-form/living-room-furniture')
    }

    const handleKitchenDiningFurniture = () => {
        history.push('/post-ad-form/kitchen-dining-furniture')
    }

    const handleBedroomFurniture = () => {
        history.push('/post-ad-form/bedroom-furniture')
    }

    const handleOfficeShopFurniture = () => {
        history.push('/post-ad-form/office-shop-furniture')
    }

    const handleChildrensFurniture = () => {
        history.push('/post-ad-form/childrens-furniture')
    }

    const handleAcsHomeElectronics = () => {
        history.push('/post-ad-form/acs-home-electronics')
    }

    const handleHomeAppliances = () => {
        history.push('/post-ad-form/home-appliances')
    }

    const handleHouseholdItems = () => {
        history.push('/post-ad-form/household-items')
    }

    const handleHomeTextilesDecoration = () => {
        history.push('/post-ad-form/home-textile-decoration')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleLivingRoomFurniture()}}>
                <CustomCatButton
                title="Living Room Furniture"
                />
                </button>
                <button onClick={()=>{handleKitchenDiningFurniture()}}>
                <CustomCatButton
                title="Kitchen & Dining Furniture"
                />
                </button>
                <button onClick={()=>{handleBedroomFurniture()}}>
                <CustomCatButton
                title="Bedroom Furniture"
                />
                </button>
                <button onClick={()=>{handleOfficeShopFurniture()}}>
                <CustomCatButton
                title="Office & Shop Furniture"
                />
                </button>
                <button onClick={()=>{handleChildrensFurniture()}}>
                <CustomCatButton
                title="Children's Furniture"
                />
                </button>
                <button onClick={()=>{handleAcsHomeElectronics()}}>
                <CustomCatButton
                title="ACs & Home Electronics"
                />
                </button>
                <button onClick={()=>{handleHomeAppliances()}}>
                <CustomCatButton
                title="Home Appliances"
                />
                </button>
                <button onClick={()=>{handleHouseholdItems()}}>
                <CustomCatButton
                title="Household Items"
                />
                </button>
                <button onClick={()=>{handleHomeTextilesDecoration()}}>
                <CustomCatButton
                title="Home Textiles & Decoration"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryHomeLiving;
