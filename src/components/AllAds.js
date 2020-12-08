import React from 'react';
import './AllAds.css';
import CustomCatButtonWithImg from './CustomCatButtonWithImg';
import './CustomCatButtonWithImg.css';

const AllAds = () => {

    const handleEssentialsButton = () => {
        
      }
    
      const handleMobilesButton = () => {
        
      }
    
      const handleElectronicsButton = () => {
        
      }
    
      const handleVehiclesButton = () => {
        
      }
    
      const handlePropertyButton = () => {
        
      }
    
      const handleServicesButton = () => {
        
      }
    
      const handleHomeLivingButton = () => {
        
      }
    
      const handleFashionBeautyButton = () => {
        
      }
    
      const handleHobbiesSportsKidsButton = () => {
        
      }
    
      const handleBusinessIndustryButton = () => {
        
      }
    
      const handleEducationButton = () => {
        
      }
    
      const handlePetsAnimalsButton = () => {
        
      }
    
      const handleAgricultureButton = () => {
        
      }

    return (
        <div className="allAdsContainer">
            <div className="allAdsBody">
                <div className="allAdsHeader">
                <input className="searchAdBox" type="text" placeholder="What are you looking for?" />
                <button className="searchAdsButton">Search</button>
                </div>
                <div className="allAdsBodyColumns">
                    <div className="allAdsBodyLeft">
                    <span style={{color: 'rgb(121, 121, 121)'}}>Categories:</span>
                    <div className="modalContainer">
                    <div className="modalColumn">
                    <button onClick={()=>{handleEssentialsButton()}}>
                        <CustomCatButtonWithImg
                        title="Essentials"
                        image="groceries.svg"
                        />
                        </button>
                        <button onClick={()=>{handleMobilesButton()}}>
                        <CustomCatButtonWithImg
                        title="Mobiles"
                        image="Mobiles.png"
                        />
                        </button>
                        <button onClick={()=>{handleElectronicsButton()}}>
                        <CustomCatButtonWithImg
                        title="Electronics"
                        image="television.svg"
                        />
                        </button>
                        <button onClick={()=>{handleVehiclesButton()}}>
                        <CustomCatButtonWithImg
                        title="Vehicles"
                        image="vehicles.png"
                        />
                        </button>
                        <button onClick={()=>{handlePropertyButton()}}>
                        <CustomCatButtonWithImg
                        title="Property"
                        image="property.png"
                        />
                        </button>
                        <button onClick={()=>{handleServicesButton()}}>
                        <CustomCatButtonWithImg
                        title="Services"
                        image="customer-support.svg"
                        />
                        </button>
                        <button onClick={()=>{handleHomeLivingButton()}}>
                        <CustomCatButtonWithImg
                        title="Home & Living"
                        image="washing-machine.svg"
                        />
                        </button>
                        <button onClick={()=>{handleFashionBeautyButton()}}>
                        <CustomCatButtonWithImg
                        title="Fashion & Beauty"
                        image="watch.svg"
                        />
                        </button>
                        <button onClick={()=>{handleHobbiesSportsKidsButton()}}>
                        <CustomCatButtonWithImg
                        title="Hobbies, Sports & Kids"
                        image="football-ball.svg"
                        />
                        </button>
                        <button onClick={()=>{handleBusinessIndustryButton()}}>
                        <CustomCatButtonWithImg
                        title="Business & Industry"
                        image="factory.svg"
                        />
                        </button>
                        <button onClick={()=>{handleEducationButton()}}>
                        <CustomCatButtonWithImg
                        title="Education"
                        image="graduated.svg"
                        />
                        </button>
                        <button onClick={()=>{handlePetsAnimalsButton()}}>
                        <CustomCatButtonWithImg
                        title="Pets & Animals"
                        image="shiba.svg"
                        />
                        </button>
                        <button onClick={()=>{handleAgricultureButton()}}>
                        <CustomCatButtonWithImg
                        title="Agriculture"
                        image="agriculture.svg"
                        />
                        </button>
                        </div>
                        </div>
                    </div>
                    <div className="allAdsBodyRight">
                        right 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAds;
