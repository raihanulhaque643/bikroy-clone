import React from 'react';
import './Authentication.css';

import Login from './Login';

const Authentication = () => {
    return (
        <div className="authContainer">
            <div className="authBody">
                <div className="authColOne">
                <div className="authColOneHolder">
                    <h4 style={{marginBottom: '0px'}}>Log in / Sign up to Bikryo</h4>
                    <p style={{marginTop: '5px', color:"darkgray"}}>To view your ads and account details, please login to your Bikroy account.</p>
                    <p style={{marginTop: '30px', color:" rgb(126, 125, 125)"}}>Start posting your own ads.</p>
                    <p style={{marginTop: '30px', color:" rgb(126, 125, 125)"}}>Mark ads as favorite and view them later.</p>
                    <p style={{marginTop: '30px', color:" rgb(126, 125, 125)"}}>View and manage your ads at convenience.</p>
                </div>
                </div>
                <div className="authColTwo">
                <div className="authColTwoHolder">
                    <Login />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;
