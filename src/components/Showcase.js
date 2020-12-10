import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Showcase.css';
import { fetchAllAds, fetchMobilesAds, fetchPropertyAds, fetchVehiclesAds } from '../features/ads/adsSlice';

const Showcase = () => {

    const dispatch = useDispatch();

    const history = useHistory();

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
        dispatch(fetchAllAds());
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
                            <li><a href="#">Dhaka</a></li>
                            <li><a href="#">Chattogram</a></li>
                            <li><a href="#">Sylhet</a></li>
                            <li><a href="#">Khulna</a></li>
                            <li><a href="#">Barishal</a></li>
                            <li><a href="#">Rajshahi</a></li>
                            <li><a href="#">Rangpur</a></li>
                            <li><a href="#">Mymensingh</a></li>
                        </ul>
                    </div>
                    <div className="cities">
                        <ul>
                            <li><h3>Divisions</h3></li>
                            <li><a href="#">Dhaka Division</a></li>
                            <li><a href="#">Chattogram Division</a></li>
                            <li><a href="#">Sylhet Division</a></li>
                            <li><a href="#">Khulna Division</a></li>
                            <li><a href="#">Barishal Division</a></li>
                            <li><a href="#">Rajshahi Division</a></li>
                            <li><a href="#">Rangpur Division</a></li>
                            <li><a href="#">Mymensingh Division</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;
