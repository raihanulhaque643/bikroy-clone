import React from 'react';
import NumberFormat from 'react-number-format';
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
                <div className="adInfoTitle">{ad.title}</div>
                <div className="adInfoCity">{ad.city}, {ad.category}</div>
                <div className="adInfoPrice">
                    <NumberFormat 
                    value={ad.price} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    thousandsGroupStyle="lakh" 
                    prefix={'Tk. '} />
                </div>
                <div className="adInfoDateTime">{ad.dateCreated} {ad.timeCreated}</div>
            </div>
        </div>
    )
}

export default AdInfo;
