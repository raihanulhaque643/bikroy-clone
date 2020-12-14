import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../components/Header.css'

import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { logOut } from '../firebase/firebase';
import { fetchAllAds } from '../features/ads/adsSlice';

const Header = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [content, setContent] = useState(
        <div className="loginButton" onClick={()=>{history.push('/auth')}}>
            Log in
        </div>
    );

    useEffect(() => {
        const email = localStorage.getItem('email')
        if(email) {
            setContent(
                <div className="email_logout_Container">
                    <div className="email">{email}</div>
                    <div className="loginButton" onClick={()=>{logOut();history.push('/')}}>
                        Log out
                    </div>
                </div>
            )
        } else {
            setContent(
                <div className="loginButton" 
                onClick={()=>{history.push('/auth')}}>
                Log in
                </div>
            )
        }
    }, [])

    const handlePostAdButton = () => {
        const user = localStorage.getItem('email');
        if (user) {
            history.push('/post-ad');
        } else {
            history.push('/auth');
        }
    }

    const handleAllAdsButton = () => {
        dispatch(fetchAllAds());
        history.push('/all-ads');
    }

    return (
        <div className="headerContainer">
            <div className="header">
            <div className="headerLeft">
                <div className="logo" 
                onClick={()=>{history.push('/home')}}>Bikryo.com</div>
                <div className="allAdsLink" 
                onClick={
                    ()=>{
                        handleAllAdsButton()
                        }
                    }>All ads</div>
            </div>
            <div className="headerRight">
                <div>{content}</div>
                <div className="postYourAdButtonContainer">
                    <button 
                    className="postYourAdButton"  
                    onClick={()=>{handlePostAdButton()}}>
                    Post your ad</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;
