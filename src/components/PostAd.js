import React from 'react';
import './PostAd.css';

const PostAd = () => {

    const userName = localStorage.getItem('email');

    return (
        <div className="postAdContainer">
            <div className="postAdBody">
                <div className="postAdHeader">
                    <h4 style={{marginTop: '0px', marginBottom: '12px'}}>Welcome {userName}! Let's post an ad.</h4>
                    <span style={{marginTop: '0px'}}>Choose any option below.</span>
                </div>

                <div className="postAdMain">
                    <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="cash.svg" alt=""/>
                            <span>Sell something</span>
                        </div>
                        <div><a href="#">Sell an item,property or service</a></div>
                        <div><a href="#">Offer a property for rent</a></div>
                    </div>
                    <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="briefcase.svg" alt=""/>
                            <span>Sell something</span>
                        </div>
                        <div><a href="#">Sell an item,property or service</a></div>
                        <div><a href="#">Offer a property for rent</a></div>
                    </div>
                    <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="earthLook.svg" alt=""/>
                            <span>Sell something</span>
                        </div>
                        <div><a href="#">Sell an item,property or service</a></div>
                        <div><a href="#">Offer a property for rent</a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostAd;
