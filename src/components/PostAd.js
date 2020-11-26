import React from 'react';
import './PostAd.css';

const PostAd = () => {

    const userName = localStorage.getItem('email');

    return (
        <div className="postAdContainer">
            <div className="postAdBody">
                <h4>Welcome {userName}! Let's post an ad.</h4>
            </div>
        </div>
    )
}

export default PostAd;
