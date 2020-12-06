import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import adsReducer from '../features/ads/adsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    ads: adsReducer
  },
});
