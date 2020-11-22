import React from 'react';
import '../components/Header.css'

import {
    useHistory
  } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    return (
        <div className="headerContainer">
            <div className="header">
            <div className="headerLeft">
                <div className="logo" onClick={()=>{history.push('/home')}}>Bikryo.com</div>
                <div className="allAdsLink">All ads</div>
            </div>
            <div className="headerRight">
                <div className="loginButton" onClick={()=>{history.push('/auth')}}>
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
