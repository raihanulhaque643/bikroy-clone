import { createSlice } from '@reduxjs/toolkit';
import {storageRef} from '../../firebase/firebase.js';
import { v4 as uuidv4 } from 'uuid';

export const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    value: 0,
  },
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
});

export const { increment, decrement, incrementByAmount } = adsSlice.actions;

export const uploadImageAsync = values => dispatch => {
    const file = values.photo;
    const uniqueFilename = uuidv4();
  var ref = storageRef.child(uniqueFilename);
  ref.put(file).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
      });
    });
};

export const selectAds = state => state.ads.value;

export default adsSlice.reducer;
