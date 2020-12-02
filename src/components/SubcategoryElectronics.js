import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';


const SubcategoryElectronics = () => {

    const history = useHistory();

    const handleDesktopComputers = () => {
        history.push('/post-ad-form/electronics/desktop-computers')
    }

    const handleLaptops = () => {
        history.push('/post-ad-form/electronics/laptops')
    }

    const handleLaptopComputerAccessories = () => {
        history.push('/post-ad-form/electronics/laptop-computer-accessories')
    }

    const handleTabletsAccessories = () => {
        history.push('/post-ad-form/electronics/tablet-accessories')
    }

    const handleCamerasCamcordersAccessories = () => {
        history.push('/post-ad-form/electronics/cameras-camcorders-accessories')
    }

    const handleAudioSoundSystems = () => {
        history.push('/post-ad-form/electronics/audio-sound-systems')
    }

    const handleVideoGameConsolesAccessories = () => {
        history.push('/post-ad-form/electronics/video-game-console-accessories')
    }

    const handlePhotocopiers = () => {
        history.push('/post-ad-form/electronics/photocopiers')
    }

    const handleOtherElectronics = () => {
        history.push('/post-ad-form/electronics/other-electronics')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleDesktopComputers()}}>
                <CustomCatButton
                title="Desktop Computers"
                />
                </button>
                <button onClick={()=>{handleLaptops()}}>
                <CustomCatButton
                title="Laptops"
                />
                </button>
                <button onClick={()=>{handleLaptopComputerAccessories()}}>
                <CustomCatButton
                title="Laptop & Computer Accessories"
                />
                </button>
                <button onClick={()=>{handleTabletsAccessories()}}>
                <CustomCatButton
                title="Tablets & Accessories"
                />
                </button>
                <button onClick={()=>{handleCamerasCamcordersAccessories()}}>
                <CustomCatButton
                title="Cameras, Camcorders & Accessories"
                />
                </button>
                <button onClick={()=>{handleAudioSoundSystems()}}>
                <CustomCatButton
                title="Audio & Sound Systems"
                />
                </button>
                <button onClick={()=>{handleVideoGameConsolesAccessories()}}>
                <CustomCatButton
                title="Video Game Consoles & Accessories"
                />
                </button>
                <button onClick={()=>{handlePhotocopiers()}}>
                <CustomCatButton
                title="Photocopiers"
                />
                </button>
                <button onClick={()=>{handleOtherElectronics()}}>
                <CustomCatButton
                title="Other Electronics"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryElectronics;
