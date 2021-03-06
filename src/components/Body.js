import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
    fetchJobsAds, 
    fetchMobilesAds, 
    fetchOverseasJobsAds, 
    fetchPetsAnimalsAds, 
    fetchPropertyAds, 
    fetchServicesAds, 
    fetchVehiclesAds, 
    selectAds 
} from '../features/ads/adsSlice.js';
import './Body.css';
import CategoryItem from './CategoryItem';

const Body = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handlePostAdButton = () => {
        const user = localStorage.getItem('email');
        if (user) {
            history.push('/post-ad');
        } else {
            history.push('/auth');
            window.scrollTo(0, 0);
        }
    }

    const handleEssentialsButton = () => {
        dispatch(fetchEssentialssAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

      const handleJobsButton = () => {
        dispatch(fetchJobsAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

      const handleOverseasJobsButton = () => {
        dispatch(fetchOverseasJobsAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleMobilesButton = () => {
        dispatch(fetchMobilesAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleElectronicsButton = () => {
        dispatch(fetchElectronicssAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleVehiclesButton = () => {
        dispatch(fetchVehiclesAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handlePropertyButton = () => {
        dispatch(fetchPropertyAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleServicesButton = () => {
        dispatch(fetchServicesAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleHomeLivingButton = () => {
        dispatch(fetchHomeLivingAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleFashionBeautyButton = () => {
        dispatch(fetchFashionBeautyAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleHobbiesSportsKidsButton = () => {
        dispatch(fetchHobbiesSportsKidsAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleBusinessIndustryButton = () => {
        dispatch(fetchBusinessIndustryAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleEducationButton = () => {
        dispatch(fetchEducationAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handlePetsAnimalsButton = () => {
        dispatch(fetchPetsAnimalsAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleAgricultureButton = () => {
        dispatch(fetchAgricultureAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

    return (
        <div className="bodyContainer">
            <div className="bodyMainColumn">
                <div className="bodyRowOne">
                    <div className="bodyRowOneLeft">
                        <div className="bodyRowOneLeftColumnOne">
                            <img src="shield.svg" alt="" style={{width: '50px', height: 'auto', padding: '0px 5px'}} />
                        </div>
                        <div className="bodyRowOneLeftColumnTwo">
                            <h5 style={{margin: '6px 0px'}}>Stay safe while trading!</h5>
                            <p style={{margin: '6px 0px'}}>All ads are manually reviewed by our team for your safety. <a href="#">Read our tips</a> on how to make safe deals.</p>
                        </div>
                    </div>
                    <div className="bodyRowOneRight">
                        <div className="bodyRowOneRightColumnOne">
                            <img src="facebook.svg" alt="" style={{width: '35px', height: 'auto', padding: '0px 5px'}}/>
                        </div>
                        <div className="bodyRowOneRightColumnTwo">
                            <a href="#">Like us on Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="bodyRowTwo">

                <div className="bodyRowTwoPanel">
                <button onClick={()=>{handleMobilesButton()}}>
                <CategoryItem
                name="Mobiles" productStock="87,797" description="Buy and sell new and used mobiles, SIM cards and other mobile accessories in Bangladesh. Choose from top brands including Apple, OnePlus, Xiaomi and Nokia."  image="mobiles.png" />
                </button>
                <button onClick={()=>{handleElectronicsButton()}}>
                <CategoryItem 
                name="Electronics" productStock="85,951" description="Find great deals for used electronics in Bangladesh including mobile phones, computers, laptops, TVs, cameras and much more."  image="television.svg" />
                </button>
                <button onClick={()=>{handleHomeLivingButton()}}>
                <CategoryItem  
                name="Home & Living" productStock="33,344" description="Buy and sell new and used home appliances including furniture, kitchen items, gardening products and other items for your garden."  image="washing-machine.svg" />
                </button>
                <button onClick={()=>{handleVehiclesButton()}}>
                <CategoryItem 
                name="Vehicles" productStock="29,415" description="Buy and sell used cars, motorbikes and other vehicles in Bangladesh. Choose from top brands including Toyota, Nissan, Honda and Suzuki."  image="vehicles.png" />
                </button>
                </div>

                <div className="bodyRowTwoPanel">
                <button onClick={()=>{handlePropertyButton()}}>
                <CategoryItem 
                name="Property" productStock="17,439" description="View listings for property in Bangladesh. Find the cheapest rates for apartments, commercial and residential properties, as well as for land and plots."  image="property.png" />
                </button>
                <button onClick={()=>{handleFashionBeautyButton()}}>
                <CategoryItem
                 name="Fashion & Beauty" productStock="17,284" description="Buy and sell clothing, garments, shoes and other personal items including handbags, perfumes etc."  image="watch.svg" />
                </button>
                <button onClick={()=>{handlePetsAnimalsButton()}}>
                <CategoryItem 
                name="Pets & Animals" productStock="15,716" description="Search from the widest variety of pets in Bangladesh. Select from dogs, puppies, cats, kittens, birds and other domesticated animals."  image="shiba.svg" />
                </button>
                <button onClick={()=>{handleHobbiesSportsKidsButton()}}>
                <CategoryItem
                name="Hobbies, Sports & Kids" productStock="7,337" description="Buy and sell used musical instruments, sports gear and accessories, art and collectibles and items for kids here."  image="football-ball.svg" />
                </button>
                </div>

                <div className="bodyRowTwoPanel">
                <button onClick={()=>{handleEducationButton()}}>
                <CategoryItem 
                name="Education" productStock="4,245" description="Buy and sell books and magazines, find tuition, classes and other educational resources in Bangladesh."  image="graduated.svg" />
                </button>
                <button onClick={()=>{handleEssentialsButton()}}>
                <CategoryItem 
                name="Essentials" productStock="2,979" description="Find daily essential products, including groceries, healthcare products, household items, fruits & vegetables, meat & seafood and baby products near you."  image="groceries.svg" />
                </button>
                <button onClick={()=>{handleBusinessIndustryButton()}}>
                <CategoryItem 
                name="Business & Industry" productStock="2,433" description="This is where businesses in Bangladesh trade, numerous business and industry services offered to trade and consumers."  image="factory.svg" />
                </button>
                <button onClick={()=>{handleJobsButton()}}>
                <CategoryItem 
                name="Jobs" productStock="892" description="Post and apply for jobs and career opportunities in Bangladesh. Search for job vacancies in your city."  image="jobs.png" />
                </button>
                </div>

                <div className="bodyRowTwoPanel">
                <button onClick={()=>{handleServicesButton()}}>
                <CategoryItem
                 name="Services" productStock="788" description="Browse through a range of service offerings to businesses and consumers alike."  image="customer-support.svg" />
                 </button>
                 <button onClick={()=>{handleAgricultureButton()}}>
                <CategoryItem 
                name="Agriculture" productStock="696" description="Find agricultural products, including fresh crop seeds, plants and fertilizers in Bangladesh."  image="agriculture.svg" />
                </button>
                <button onClick={()=>{handleOverseasJobsButton()}}>
                <CategoryItem
                 name="Overseas Jobs" productStock="42" description="Apply for overseas jobs, browse a range of quality international job vacancies in your dream location."  image="overseas.png" />
                 </button>
                </div>

                </div>

                <div className="bodyFooter">
                    <p style={{fontSize: '26px', marginTop: '40px'}}>Do you have something to sell?</p>
                    <p style={{fontSize: '20px', marginTop: '0px'}}>Post your ad on Bikryo.com</p>
                    <p><button className="bodyFooterButton" onClick={()=>{handlePostAdButton()}}>Post an ad now!</button></p>
                </div>
            </div>
        </div>
    )
}

export default Body;
