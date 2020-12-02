import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryVehicles = () => {

    const history = useHistory();

    const handleCars = () => {
        history.push('/post-ad-form/vehicles/cars')
    }

    const handleMotorbikesScooters = () => {
        history.push('/post-ad-form/vehicles/motorbikes-scooters')
    }

    const handleBicyclesThreeWheelers = () => {
        history.push('/post-ad-form/vehicles/bicycles-three-wheelers')
    }

    const handleTrucksVansBuses = () => {
        history.push('/post-ad-form/vehicles/trucks-vans-buses')
    }

    const handleTractorsHeavyDuty = () => {
        history.push('/post-ad-form/vehicles/tractors-heavy-duty')
    }

    const handleAutoPartsAccessories = () => {
        history.push('/post-ad-form/vehicles/auto-parts-accessories')
    }

    const handleWaterTranport = () => {
        history.push('/post-ad-form/vehicles/water-transport')
    }

    const handleCarRentalAutosServices = () => {
        history.push('/post-ad-form/vehicles/car-rental-auto-services')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleCars()}}>
                <CustomCatButton
                title="Cars"
                />
                </button>
                <button onClick={()=>{handleMotorbikesScooters()}}>
                <CustomCatButton
                title="Motorbikes & Scooters"
                />
                </button>
                <button onClick={()=>{handleBicyclesThreeWheelers()}}>
                <CustomCatButton
                title="Bicycles & Three Wheelers"
                />
                </button>
                <button onClick={()=>{handleTrucksVansBuses()}}>
                <CustomCatButton
                title="Trucks, Vans & Buses"
                />
                </button>
                <button onClick={()=>{handleTractorsHeavyDuty()}}>
                <CustomCatButton
                title="Tractors & Heavy-Duty"
                />
                </button>
                <button onClick={()=>{handleAutoPartsAccessories()}}>
                <CustomCatButton
                title="Auto Parts & Accessories"
                />
                </button>
                <button onClick={()=>{handleWaterTranport()}}>
                <CustomCatButton
                title="Water Transport"
                />
                </button>
                <button onClick={()=>{handleCarRentalAutosServices()}}>
                <CustomCatButton
                title="Car Rentals & Auto Services"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryVehicles;
