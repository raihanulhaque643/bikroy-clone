import React from 'react';
import '../components/Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
            <div className="headerLeft">
                <div className="logo">Bikryo.com</div>
                <div className="allAdsLink">All ads</div>
            </div>
            <div className="headerRight">
                <div className="loginButton">
                    Log in
                </div>
                <div className="postYourAdButtonContainer">
                    <button className="postYourAdButton">Post your ad</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;
