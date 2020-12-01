import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryPetsAnimals = () => {

    const history = useHistory();

    const handlePets = () => {
        history.push('/post-ad-form/pets')
    }

    const handleFarmAnimals = () => {
        history.push('/post-ad-form/farm-animals')
    }

    const handlePetAnimalAccessories = () => {
        history.push('/post-ad-form/pet-animal-accessories')
    }

    const handleOtherPetsAnimals = () => {
        history.push('/post-ad-form/other-pets-animals')
    }
    
    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handlePets()}}>
                <CustomCatButton
                title="Pets"
                />
                </button>
                <button onClick={()=>{handleFarmAnimals()}}>
                <CustomCatButton
                title="Farm Animals"
                />
                </button>
                <button onClick={()=>{handlePetAnimalAccessories()}}>
                <CustomCatButton
                title="Pet & Animal Accessories"
                />
                </button>
                <button onClick={()=>{handleOtherPetsAnimals()}}>
                <CustomCatButton
                title="Other Pets & Animals"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryPetsAnimals;
