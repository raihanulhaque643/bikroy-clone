import React from 'react';
import './Authentication.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch
  } from "react-router-dom";

import Login from './Login';
import Signup from './Signup';

const Authentication = () => {
    let match = useRouteMatch();

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
                <Switch>
                    <Route exact path={`${match.path}/signup`}>
                        <Signup />
                    </Route>
                    <Route exact path={match.path}>
                        <Login />
                    </Route>
                    <Route path='/'>
                        <Redirect to={`${match.path}`} />
                    </Route>
                </Switch>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;
