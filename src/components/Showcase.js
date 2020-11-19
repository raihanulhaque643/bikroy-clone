import React from 'react';
import './Showcase.css';

const Showcase = () => {
    return (
        <div className="showcaseContainer">
            <div className="showcase">
                <div className="showcaseColumnOne">
                    <div className="rowOne">
                    <h2 className="rowOneHeading">Welcome to Bikryo.com - the largest marketplace in Bangladesh!</h2>
                    <p className="rowOneParagraph">Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more <span style={{fontWeight: "bold"}}>in Bangladesh!</span></p>
                    </div>
                    <div className="rowTwo">
                    rowTwo
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
