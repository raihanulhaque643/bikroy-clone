import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryEssentials = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/auth')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleClick()}}>
                <CustomCatButton
                title="Grocery"
                />
                </button>
                <button>
                <CustomCatButton
                title="Fruits & Vegetables"
                />
                </button>
                <button>
                <CustomCatButton
                title="Meat & Seafood"
                />
                </button>
                <button>
                <CustomCatButton
                title="Baby Products"
                />
                </button>
                <button>
                <CustomCatButton
                title="Healthcare"
                />
                </button>
                <button>
                <CustomCatButton
                title="Household"
                />
                </button>
                <button>
                <CustomCatButton
                title="Other Essentials"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryEssentials;
