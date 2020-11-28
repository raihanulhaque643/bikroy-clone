import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';

const SubcategoryVehicles = () => {
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button>
                <CustomCatButton
                title="Cars"
                />
                </button>
                <button>
                <CustomCatButton
                title="Motorbikes & Scooters"
                />
                </button>
                <button>
                <CustomCatButton
                title="Bicycles & Three Wheelers"
                />
                </button>
                <button>
                <CustomCatButton
                title="Trucks, Vans & Buses"
                />
                </button>
                <button>
                <CustomCatButton
                title="Tractors & Heavy-Duty"
                />
                </button>
                <button>
                <CustomCatButton
                title="Auto Parts & Accessories"
                />
                </button>
                <button>
                <CustomCatButton
                title="Water Transport"
                />
                </button>
                <button>
                <CustomCatButton
                title="Car Rentals & Auto Services"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryVehicles;
