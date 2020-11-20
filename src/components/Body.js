import React from 'react';
import './Body.css';
import CategoryItem from './CategoryItem';

const Body = () => {
    return (
        <div className="bodyContainer">
            <div className="bodyMainColumn">
                <div className="bodyRowOne">
                    <div className="bodyRowOneLeft">
                        <div className="bodyRowOneLeftColumnOne">
                            <img src="shield.svg" alt="" style={{width: '50px', height: 'auto', padding: '0px 5px'}} />
                        </div>
                        <div className="bodyRowOneLeftColumnTwo">
                            <h5 style={{margin: '6px 0px'}}>Stay safe while trading!</h5>
                            <p style={{margin: '6px 0px'}}>All ads are manually reviewed by our team for your safety. <a href="#">Read our tips</a> on how to make safe deals.</p>
                        </div>
                    </div>
                    <div className="bodyRowOneRight">
                        <div className="bodyRowOneRightColumnOne">
                            <img src="facebook.svg" alt="" style={{width: '35px', height: 'auto', padding: '0px 5px'}}/>
                        </div>
                        <div className="bodyRowOneRightColumnTwo">
                            <a href="#">Like us on Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="bodyRowTwo">
                <CategoryItem name="Mobiles" productStock="87,797" description="Buy and sell new and used mobiles, SIM cards and other mobile accessories in Bangladesh. Choose from top brands including Apple, OnePlus, Xiaomi and Nokia."  image="mobiles.png" />
                </div>
            </div>
        </div>
    )
}

export default Body;
