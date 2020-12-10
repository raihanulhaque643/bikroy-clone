import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './AdDetails.css';

const AdDetails = (props) => {

    let {uniqueAdId} = useParams();

    const ad = useSelector(state =>
        state.ads.ads.find(ad => ad.uniqueAdId === uniqueAdId)
      );

    return (
        <div>
            AdDetails Component
        </div>
    )
}

export default AdDetails;
