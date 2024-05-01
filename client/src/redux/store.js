//import rootSlice from './rootSlice';
//import { combineReducers } from 'redux';
import useReducer from './rootSlice';
import { configureStore } from '@reduxjs/toolkit';

// const reducer = combineReducers({
//   root: rootSlice,
// });

const store = configureStore({
  reducer: {
    root: useReducer,
  },
});

export default store;
