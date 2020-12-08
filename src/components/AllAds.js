import React from 'react';
import './AllAds.css';

const AllAds = () => {
    return (
        <div className="allAdsContainer">
            <div className="allAdsBody">
                <div className="allAdsHeader">
                <input className="searchAdBox" type="text" placeholder="What are you looking for?" />
                <button className="searchAdsButton">Search</button>
                </div>
                AllAds component
            </div>
        </div>
    )
}

export default AllAds;
