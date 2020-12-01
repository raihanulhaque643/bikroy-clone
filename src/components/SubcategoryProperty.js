import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryProperty = () => {

    const history = useHistory();

    const handleApartmentsFlats = () => {
        history.push('/post-ad-form/apartments-flats')
    }

    const handleNewDevelopment = () => {
        history.push('/post-ad-form/new-development')
    }

    const handleHouses = () => {
        history.push('/post-ad-form/houses')
    }

    const handlePlotsLand = () => {
        history.push('/post-ad-form/plots-land')
    }

    const handleGarages = () => {
        history.push('/post-ad-form/garages')
    }

    const handleCommercialProperty = () => {
        history.push('/post-ad-form/commercial-property')
    }

    const handlePropertyToolsServices = () => {
        history.push('/post-ad-form/property-tools-services')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleApartmentsFlats()}}>
            <CustomCatButton
            title="Apartments & Flats"
            />
            </button>
            <button onClick={()=>{handleNewDevelopment()}}>
            <CustomCatButton
            title="New Development"
            />
            </button>
            <button onClick={()=>{handleHouses()}}>
            <CustomCatButton
            title="Houses"
            />
            </button>
            <button onClick={()=>{handlePlotsLand()}}>
            <CustomCatButton
            title="Plots & Land"
            />
            </button>
            <button onClick={()=>{handleGarages()}}>
            <CustomCatButton
            title="Garages"
            />
            </button>
            <button onClick={()=>{handleCommercialProperty()}}>
            <CustomCatButton
            title="Commercial Property"
            />
            </button>
            <button onClick={()=>{handlePropertyToolsServices()}}>
            <CustomCatButton
            title="Property Tools & Services"
            />
            </button>
            </div>
    </div>
    )
}

export default SubcategoryProperty;
