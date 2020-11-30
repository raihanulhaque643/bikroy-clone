import React from 'react';
import './PostAd.css';
import PostAdCategory from './PostAdCategory';

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
                <PostAdCategory 
                title="Sell something"
                titleImage="cash.svg"
                buttonOne="Sell an item, property or service"
                buttonTwo="Offer a property for rent"
                 />
                </div>
                <div className="postAdFooter">
                    <a href="#">Know your posting allowance</a>
                    <span style={{color: '#0074ba'}}>|</span>
                    <a href="#">See our posting rules</a>
                </div>
            </div>
        </div>
    )
}

export default PostAd;
