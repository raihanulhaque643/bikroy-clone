import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import './AdDetails.css';

const AdDetails = (props) => {

    let {uniqueAdId} = useParams();

    const ad = useSelector(state =>
        state.ads.ads.find(ad => ad.uniqueAdId === uniqueAdId)
      );

    return (
        <div className="adDetailsContainer">
            <div className="adDetailsBody">
                <div className="adDetailsHeader">
                    <div className="adDetailsHeaderTitle">
                        {ad.title}
                    </div>
                    <div className="adDetailsHeaderSubtitle">
                        Posted on {ad.dateCreated}, {ad.timeCreated}, {ad.city}
                    </div>
                </div>
                <div className="adDetailsBodyContent">
                    <div className="adDetailsBodyContentLeft">
                    <div className="adDetailsBodyContentLeftImageContainer">
                        <img  src={ad.imageDownloadUrl} alt=""/>
                    </div>
                    <div className="adDetailsBodyContentLeftDescriptionContainer">
                        <NumberFormat
                        value={ad.price} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        thousandsGroupStyle="lakh" 
                        prefix={'Tk. '}
                        className="adDetailsPrice"
                         />
                        <span style={{color: 'gray', fontStyle:'italic'}}>
                        {
                            ad.negotiable ?
                            ' Negotiable' :
                            ' Non-negotiable' 
                        }
                        <br/>
                        </span>
                        <br/>
                        <div>
                            <div style={{fontWeight: 'bold'}}>Details: </div>
                            <div style={{color: 'gray'}}>{ad.description}</div>
                        </div>
                    </div>
                    </div>
                    <div className="adDetailsBodyContentRight">
                        <div className="adDetailsBodyContentRightColumn">
                        <div className="adDetailsBodyContentRightRow">
                        For sale by 
                        <span style={{fontWeight: 'bold', color:'black'}}> {ad.adOwner}</span>
                        </div>
                        <div className="adDetailsBodyContentRightRow">
                        Contact
                        <span style={{fontWeight: 'bold', color:'black'}}> {ad.contact}</span>
                        </div>
                        <div className="adDetailsBodyContentRightRow">Chat</div>
                        {
                            (localStorage.getItem('email') == ad.adOwner) && <button className="deleteAdButton">DELETE</button> 
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdDetails;
