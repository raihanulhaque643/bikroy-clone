import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Showcase.css';
import { fetchAllAds, fetchBarishalAds, fetchChattogramAds, fetchDhakaAds, fetchJobsAds, fetchKhulnaAds, fetchMobilesAds, fetchMymensinghAds, fetchPropertyAds, fetchRajshahiAds, fetchRangpurAds, fetchSylhetAds, fetchVehiclesAds } from '../features/ads/adsSlice';

const Showcase = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleDhaka = () => {
        dispatch(fetchDhakaAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleChattogram = () => {
        dispatch(fetchChattogramAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleSylhet = () => {
        dispatch(fetchSylhetAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleKhulna = () => {
        dispatch(fetchKhulnaAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleBarishal = () => {
        dispatch(fetchBarishalAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleRajshahi = () => {
        dispatch(fetchRajshahiAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleRangpur = () => {
        dispatch(fetchRangpurAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handleMymensingh = () => {
        dispatch(fetchMymensinghAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
    }

    const handlePropertyButton = () => {
        dispatch(fetchPropertyAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }
    
      const handleVehiclesButton = () => {
        dispatch(fetchVehiclesAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

      const handleMobilesButton = () => {
        dispatch(fetchMobilesAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

      const handleJobsButton = () => {
        dispatch(fetchJobsAds());
        history.push('/all-ads');
        window.scrollTo(0, 0);
      }

    return (
        <div className="showcaseContainer">
            <div className="showcase">
                <div className="showcaseColumnOne">
                    <div className="rowOne">
                    <h2 className="rowOneHeading">Welcome to Bikryo.com - the largest marketplace in Bangladesh!</h2>
                    <p className="rowOneParagraph">Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more <span style={{fontWeight: "bold"}}>in Bangladesh!</span></p>
                    </div>
                    <div className="rowTwo">
                    <h4>Browse our top categories:</h4>
                    <div className="showcaseCategories">
                        <div className="showcaseCategoriesRowOne">
                            <div className="categoryColumn"><button onClick={()=>{handleMobilesButton()}}><img src="Mobiles.png" alt=""/>Mobiles</button></div>
                            <div className="categoryColumn"><button onClick={()=>{handlePropertyButton()}}><img src="property.png" alt=""/>Property</button></div>
                            <div className="categoryColumn"><button onClick={()=>{handleVehiclesButton()}}><img src="vehicles.png" alt=""/>Vehicles</button></div>
                            <div className="categoryColumn"><button onClick={()=>{handleJobsButton()}}><img src="jobs.png" alt=""/>Jobs</button></div>
                        </div>
                        <div className="showcaseCategoriesRowTwo">
                            <div className="showcaseCategoriesRowTwoItemOne">New!</div>
                            <div className="showcaseCategoriesRowTwoItemTwo">Doorstep delivery</div>
                            <div className="showcaseCategoriesRowTwoItemThree">Order online with 100% buyer protection</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="showcaseColumnTwo">
                <img src="bd.svg" alt="" className="bdMap" />
                </div>
                <div className="showcaseColumnThree">
                    <div className="cities">
                        <ul>
                            <li><h3>Cities</h3></li>
                            <li><button onClick={()=>{handleDhaka()}}>Dhaka</button></li>
                            <li><button onClick={()=>{handleChattogram()}}>Chattogram</button></li>
                            <li><button onClick={()=>{handleSylhet()}}>Sylhet</button></li>
                            <li><button onClick={()=>{handleKhulna()}}>Khulna</button></li>
                            <li><button onClick={()=>{handleBarishal()}}>Barishal</button></li>
                            <li><button onClick={()=>{handleRajshahi()}}>Rajshahi</button></li>
                            <li><button onClick={()=>{handleRangpur()}}>Rangpur</button></li>
                            <li><button onClick={()=>{handleMymensingh()}}>Mymensingh</button></li>
                        </ul>
                    </div>
                    <div className="cities">
                        <ul>
                            <li><h3>Divisions</h3></li>
                            <li><button onClick={()=>{handleDhaka()}}>Dhaka Division</button></li>
                            <li><button onClick={()=>{handleChattogram()}}>Chattogram Division</button></li>
                            <li><button onClick={()=>{handleSylhet()}}>Sylhet Division</button></li>
                            <li><button onClick={()=>{handleKhulna()}}>Khulna Division</button></li>
                            <li><button onClick={()=>{handleBarishal()}}>Barishal Division</button></li>
                            <li><button onClick={()=>{handleRajshahi()}}>Rajshahi Division</button></li>
                            <li><button onClick={()=>{handleRangpur()}}>Rangpur Division</button></li>
                            <li><button onClick={()=>{handleMymensingh()}}>Mymensingh Division</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;
