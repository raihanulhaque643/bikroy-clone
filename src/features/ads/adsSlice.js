import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {storageRef, db} from '../../firebase/firebase.js';
import firebase from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export const fetchAllAds = createAsyncThunk('ads/fetchAllAds', async () => {
  const ref = db.collection("ads").orderBy("timestamp", "desc");
  const response = await ref.get().then((querySnapshot) => {
    let adsArray =[];
    querySnapshot.forEach(doc => {
      adsArray.push(doc.data());
    })
    console.log(adsArray);
    return adsArray;
  })
  return response;
})

export const createAdAsync = createAsyncThunk('ads/createAd', async (adDetails) => {
  const uniqueAdId = uuidv4();
  const { category, subcategory,title,description,negotiable,contact,uniqueImageId,imageDownloadUrl,adOwner, timestamp, dateCreated, timeCreated, city, price } = adDetails;
  db.collection("ads").doc(uniqueAdId).set({
    uniqueAdId,category, subcategory,title,description,negotiable,contact,uniqueImageId,imageDownloadUrl,adOwner, timestamp, dateCreated, timeCreated, city, price
  })
  .then(() => {
    console.log('Document successfully written to firestore');
  })
  .catch((error) => {
    console.log(error);
  })
});

export const uploadImageAsync = values => dispatch => {

  let today = new Date();

  let dateCreated = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  let timeCreated = formatAMPM(today);
  let timestamp = today;

  const file = values.photo;
  const uniqueFilename = uuidv4();
  var uploadTask  = storageRef.child(uniqueFilename).put(file);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
      default: 
        // default action here
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      console.log('User does not have permission to access the object');
      break;

    case 'storage/canceled':
      console.log('User canceled the upload');
      break;

    case 'storage/unknown':
      console.log('Unknown error occurred, inspect error.serverResponse');
      break;
    
    default: 
    // default action here
    break;
  }
  }, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('Upload successful!')

    let adDetails = {
      category: values.category,
      subcategory: values.subcategory,
      title: values.title,
      description: values.description,
      negotiable: values.negotiable,
      contact: values.contact,
      uniqueImageId: uniqueFilename,
      imageDownloadUrl: downloadURL,
      adOwner: localStorage.getItem('email'),
      dateCreated,
      timeCreated,
      timestamp,
      city: values.city,
      price: values.price
    }

    // console.log(adDetails);
    dispatch(createAdAsync(adDetails));

  });
  });

};

const initialState = {
  ads: [],
  status: 'idle',
  error: null
}

export const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchAllAds.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchAllAds.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchAllAds.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [createAdAsync.pending]: (state, action) => {
      state.status = 'loading'
    },
    [createAdAsync.fulfilled]: (state, action) => {
      state.status = 'succeeded'
    },
    [createAdAsync.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});

// export const { increment, decrement, incrementByAmount } = adsSlice.actions;

export const selectAds = state => state.ads.ads;

export default adsSlice.reducer;
