import React, { useState } from 'react';
import '../components/Header.css'

import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { logOut } from '../firebase/firebase';

const Header = () => {
    const history = useHistory();

    const [content, setContent] = useState(
        <div className="loginButton" onClick={()=>{history.push('/auth')}}>
            Log in
        </div>
    );

    useEffect(() => {
        const email = localStorage.getItem('email')
        if(email) {
            setContent(
                <div style={{display: 'flex'}}>
                    <div>{email}</div>
                    <div className="loginButton" onClick={()=>{logOut()}}>
                        Log out
                    </div>
                </div>
            )
        } else {
            setContent(
                <div className="loginButton" onClick={()=>{history.push('/auth')}}>
                Log in
                </div>
            )
        }
    }, [])

    return (
        <div className="headerContainer">
            <div className="header">
            <div className="headerLeft">
                <div className="logo" onClick={()=>{history.push('/home')}}>Bikryo.com</div>
                <div className="allAdsLink">All ads</div>
            </div>
            <div className="headerRight">
                {content}
                <div className="postYourAdButtonContainer">
                    <button className="postYourAdButton">Post your ad</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;
