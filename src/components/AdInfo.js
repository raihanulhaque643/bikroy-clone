import React from 'react';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import './AdInfo.css';

const AdInfo = (props) => {

    const history = useHistory();

    const ad = props.info;

    const handleClick = () => {
        history.push(`/ad-details/${ad.uniqueAdId}`);
        window.scrollTo(0,0);
    }

    return (
        <div className="adInfoContainer" key={ad.uniqueAdId} onClick={handleClick}>
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
