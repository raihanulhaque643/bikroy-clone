import React from 'react';
import './AdInfo.css';

const AdInfo = (props) => {

    const ad = props.info;

    return (
        <div className="adInfoContainer" key={ad.uniqueAdId}>
            <div className="adInfoContainerImage">
                <div className="adInfoContainerImageBox">
                <img style={{maxWidth: '100%', maxHeight: '100%', display: 'block'}} src={ad.imageDownloadUrl} alt=""/>
                </div>
            </div>
            <div className="adInfoContainerDetails">
                <div className="">{ad.title}</div>
                <div className="">{ad.city}, {ad.category}</div>
                <div className="">{ad.price}</div>
                <div className="">{ad.contact}</div>
                <div className="">{ad.dateCreated} {ad.timeCreated}</div>
            </div>
        </div>
    )
}

export default AdInfo;
