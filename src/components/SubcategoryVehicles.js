import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryVehicles = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
                <CustomCatButton
                title="Cars"
                />
                <CustomCatButton
                title="Motorbikes & Scooters"
                />
                <CustomCatButton
                title="Bicycles & Three Wheelers"
                />
                <CustomCatButton
                title="Trucks, Vans & Buses"
                />
                <CustomCatButton
                title="Tractors & Heavy-Duty"
                />
                <CustomCatButton
                title="Auto Parts & Accessories"
                />
                <CustomCatButton
                title="Water Transport"
                />
                <CustomCatButton
                title="Car Rentals & Auto Services"
                />
            </div>
    </div>
    )
}

export default SubcategoryVehicles;
