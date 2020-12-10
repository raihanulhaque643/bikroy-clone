import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
    fetchAgricultureAds, 
    fetchAllAds, 
    fetchBusinessIndustryAds, 
    fetchEducationAds, 
    fetchElectronicssAds, 
    fetchEssentialssAds, 
    fetchFashionBeautyAds, 
    fetchHobbiesSportsKidsAds, 
    fetchHomeLivingAds, 
    fetchMobilesAds, 
    fetchPetsAnimalsAds, 
    fetchPropertyAds, 
    fetchServicesAds, 
    fetchVehiclesAds, 
    selectAds 
} from '../features/ads/adsSlice.js';
import AdInfo from './AdInfo.js';
import './AllAds.css';
import CustomCatButtonWithImg from './CustomCatButtonWithImg';
import './CustomCatButtonWithImg.css';

const AllAds = () => {

    const history = useHistory();

    const ads = useSelector(selectAds);

    const dispatch = useDispatch();

    const adsStatus = useSelector(state => state.ads.status);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInput = event => {
        setSearchTerm(event.target.value);
    };

    const results = !searchTerm
    ? ads
    : ads.filter(ad =>
        ad.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

    // useEffect(() => {
    //     if (adsStatus === 'idle') {
    //       dispatch(fetchAllAds());
    //     }
    //   }, [adsStatus, dispatch]);

    const handleEssentialsButton = () => {
        dispatch(fetchEssentialssAds());
      }
    
      const handleMobilesButton = () => {
        dispatch(fetchMobilesAds());
      }
    
      const handleElectronicsButton = () => {
        dispatch(fetchElectronicssAds());
      }
    
      const handleVehiclesButton = () => {
        dispatch(fetchVehiclesAds());
      }
    
      const handlePropertyButton = () => {
        dispatch(fetchPropertyAds());
      }
    
      const handleServicesButton = () => {
        dispatch(fetchServicesAds());
      }
    
      const handleHomeLivingButton = () => {
        dispatch(fetchHomeLivingAds());
      }
    
      const handleFashionBeautyButton = () => {
        dispatch(fetchFashionBeautyAds());
      }
    
      const handleHobbiesSportsKidsButton = () => {
        dispatch(fetchHobbiesSportsKidsAds());
      }
    
      const handleBusinessIndustryButton = () => {
        dispatch(fetchBusinessIndustryAds());
      }
    
      const handleEducationButton = () => {
        dispatch(fetchEducationAds());
      }
    
      const handlePetsAnimalsButton = () => {
        dispatch(fetchPetsAnimalsAds());
      }
    
      const handleAgricultureButton = () => {
        dispatch(fetchAgricultureAds());
      }

      let content;

      if(adsStatus === 'loading') {
        content = <div>Loading... Please wait...</div>
      } else if (adsStatus === 'succeeded') {
        if (results.length) {
          content = 
          <div>
          {
                results.map((ad) => {
                    return (
                        <AdInfo info={ad} />
                    )
                })
          }
          </div>
        } else {
          content = 
          <div>
          {'No advertisements found!'}
          </div>
        }
          
      }

    return (
        <div className="allAdsContainer">
            <div className="allAdsBody">
                <div className="allAdsHeader">
                <input 
                className="searchAdBox" 
                type="text" 
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={handleSearchInput}
                 />
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
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAds;
