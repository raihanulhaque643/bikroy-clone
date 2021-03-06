import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryEssentials = () => {

    const history = useHistory();

    const handleGrocery = () => {
        history.push('/post-ad-form/essentials/grocery')
    }

    const handleFruitsVegetables = () => {
        history.push('/post-ad-form/essentials/fruits-vegetables')
    }

    const handleMeatSeafood = () => {
        history.push('/post-ad-form/essentials/meat-seafood')
    }

    const handleBabyProducts = () => {
        history.push('/post-ad-form/essentials/baby-products')
    }

    const handleHealthcare = () => {
        history.push('/post-ad-form/essentials/healthcare')
    }

    const handleHousehold = () => {
        history.push('/post-ad-form/essentials/household')
    }

    const handleOtherEssentials = () => {
        history.push('/post-ad-form/essentials/other-essentials')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleGrocery()}}>
                <CustomCatButton
                title="Grocery"
                />
                </button>
                <button onClick={()=>{handleFruitsVegetables()}}>
                <CustomCatButton
                title="Fruits & Vegetables"
                />
                </button>
                <button onClick={()=>{handleMeatSeafood()}}>
                <CustomCatButton
                title="Meat & Seafood"
                />
                </button>
                <button onClick={()=>{handleBabyProducts()}}>
                <CustomCatButton
                title="Baby Products"
                />
                </button>
                <button onClick={()=>{handleHealthcare()}}>
                <CustomCatButton
                title="Healthcare"
                />
                </button>
                <button onClick={()=>{handleHousehold()}}>
                <CustomCatButton
                title="Household"
                />
                </button>
                <button onClick={()=>{handleOtherEssentials()}}>
                <CustomCatButton
                title="Other Essentials"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryEssentials;
