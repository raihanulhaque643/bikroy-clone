import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryFashionBeauty = () => {

    const history = useHistory();

    const handleMensClothingAccessories = () => {
        history.push('/post-ad-form/fashion-beauty/mens-clothing-accessories')
    }

    const handleWomensClothingAccessories = () => {
        history.push('/post-ad-form/fashion-beauty/womens-clothing-accessories')
    }

    const handleChildrensClothingAccessories = () => {
        history.push('/post-ad-form/fashion-beauty/childrens-clothing-accessories')
    }

    const handleJewellery = () => {
        history.push('/post-ad-form/fashion-beauty/jewellery')
    }

    const handleOpticalItems = () => {
        history.push('/post-ad-form/fashion-beauty/optical-items')
    }

    const handleWatches = () => {
        history.push('/post-ad-form/fashion-beauty/watches')
    }

    const handleBags = () => {
        history.push('/post-ad-form/fashion-beauty/bags')
    }

    const handleWholesaleBulk = () => {
        history.push('/post-ad-form/fashion-beauty/wholesale-bulk')
    }

    const handleBeautyProducts = () => {
        history.push('/post-ad-form/fashion-beauty/beauty-products')
    }

    const handleOtherItems = () => {
        history.push('/post-ad-form/fashion-beauty/other-items')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleMensClothingAccessories()}}>
                <CustomCatButton
                title="Men's Clothing & Accessories"
                />
                </button>
                <button onClick={()=>{handleWomensClothingAccessories()}}>
                <CustomCatButton
                title="Women's Clothing & Accessories"
                />
                </button>
                <button onClick={()=>{handleChildrensClothingAccessories()}}>
                <CustomCatButton
                title="Children's Clothing & Accessories"
                />
                </button>
                <button onClick={()=>{handleJewellery()}}>
                <CustomCatButton
                title="Jewellery"
                />
                </button>
                <button onClick={()=>{handleOpticalItems()}}>
                <CustomCatButton
                title="Optical Items"
                />
                </button>
                <button onClick={()=>{handleWatches()}}>
                <CustomCatButton
                title="Watches"
                />
                </button>
                <button onClick={()=>{handleBags()}}>
                <CustomCatButton
                title="Bags"
                />
                </button>
                <button onClick={()=>{handleWholesaleBulk()}}>
                <CustomCatButton
                title="Wholesale - Bulk"
                />
                </button>
                <button onClick={()=>{handleBeautyProducts()}}>
                <CustomCatButton
                title="Beauty Products"
                />
                </button>
                <button onClick={()=>{handleOtherItems()}}>
                <CustomCatButton
                title="Other Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryFashionBeauty;
