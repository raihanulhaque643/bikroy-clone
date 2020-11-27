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
                 <PostAdCategory 
                title="Post a job vacancy"
                titleImage="briefcase.svg"
                buttonOne="Post a job in Bikryo"
                buttonTwo="Post a job overseas"
                 />
                 <PostAdCategory 
                title="Looking for something"
                titleImage="earthLook.svg"
                buttonOne="Looking for property to rent"
                buttonTwo="Looking for something to buy"
                 />

                    {/* <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="cash.svg" alt=""/>
                            <span>Sell something</span>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Sell an item, property or service</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Offer a property for rent</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                    </div>
                    <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="briefcase.svg" alt=""/>
                            <span>Post a job vacancy</span>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Post a job in Bikryo</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Post a job overseas</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                    </div>
                    <div className="postAdBodyColumn">
                        <div className="postAdBodyColumnHeading"
                        style={{borderTop: '1px solid rgb(230, 230, 230)'}}
                        >
                            <img src="earthLook.svg" alt=""/>
                            <span>Looking for something</span>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Looking for property to rent</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                        <div className="linkArrowHolder"><a href="#">Looking for something to buy</a>
                        <img className="rightArrow" src="right-arrow.svg" alt=""/>
                        </div>
                    </div> */}
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
