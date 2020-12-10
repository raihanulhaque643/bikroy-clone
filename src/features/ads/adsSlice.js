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

export const fetchMobilesAds = createAsyncThunk('ads/fetchMobilesAds', async () => {
  const ref = db.collection("ads").where("category", "==", "mobiles" );
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

export const fetchEssentialssAds = createAsyncThunk('ads/fetchEssentialssAds', async () => {
  const ref = db.collection("ads").where("category", "==", "essentials" );
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

export const fetchElectronicssAds = createAsyncThunk('ads/fetchElectronicssAds', async () => {
  const ref = db.collection("ads").where("category", "==", "electronics" );
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

export const fetchVehiclesAds = createAsyncThunk('ads/fetchVehiclesAds', async () => {
  const ref = db.collection("ads").where("category", "==", "vehicles" );
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

export const fetchPropertyAds = createAsyncThunk('ads/fetchPropertyAds', async () => {
  const ref = db.collection("ads").where("category", "==", "proptery" );
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

export const fetchServicesAds = createAsyncThunk('ads/fetchServicesAds', async () => {
  const ref = db.collection("ads").where("category", "==", "services" );
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

export const fetchHomeLivingAds = createAsyncThunk('ads/fetchHomeLivingAds', async () => {
  const ref = db.collection("ads").where("category", "==", "home-living" );
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

export const fetchFashionBeautyAds = createAsyncThunk('ads/fetchFashionBeautyAds', async () => {
  const ref = db.collection("ads").where("category", "==", "fashion-beauty" );
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

export const fetchHobbiesSportsKidsAds = createAsyncThunk('ads/fetchHobbiesSportsKidsAds', async () => {
  const ref = db.collection("ads").where("category", "==", "hobbies-sports-kids" );
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

export const fetchBusinessIndustryAds = createAsyncThunk('ads/fetchBusinessIndustryAds', async () => {
  const ref = db.collection("ads").where("category", "==", "business-industry" );
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

export const fetchEducationAds = createAsyncThunk('ads/fetchEducationAds', async () => {
  const ref = db.collection("ads").where("category", "==", "education" );
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

export const fetchPetsAnimalsAds = createAsyncThunk('ads/fetchPetsAnimalsAds', async () => {
  const ref = db.collection("ads").where("category", "==", "pets-animals" );
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

export const fetchAgricultureAds = createAsyncThunk('ads/fetchAgricultureAds', async () => {
  const ref = db.collection("ads").where("category", "==", "agriculture" );
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

    [fetchMobilesAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchMobilesAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchMobilesAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchEssentialssAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchEssentialssAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchEssentialssAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchElectronicssAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchElectronicssAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchElectronicssAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchVehiclesAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchVehiclesAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchVehiclesAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchPropertyAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchPropertyAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchPropertyAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchServicesAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchServicesAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchServicesAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchHomeLivingAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchHomeLivingAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchHomeLivingAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchFashionBeautyAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchFashionBeautyAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchFashionBeautyAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchHobbiesSportsKidsAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchHobbiesSportsKidsAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchHobbiesSportsKidsAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchBusinessIndustryAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchBusinessIndustryAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchBusinessIndustryAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchEducationAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchEducationAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchEducationAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchPetsAnimalsAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchPetsAnimalsAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchPetsAnimalsAds.rejected]: (state, action) => {
      // state.status = 'failed'
      state.error = action.error.message
    },

    [fetchAgricultureAds.pending]: (state, action) => {
      // state.status = 'loading'
    },
    [fetchAgricultureAds.fulfilled]: (state, action) => {
      // state.status = 'succeeded'
      state.ads = [];
      state.ads = state.ads.concat(action.payload);
    },
    [fetchAgricultureAds.rejected]: (state, action) => {
      // state.status = 'failed'
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
