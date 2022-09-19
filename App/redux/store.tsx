/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { favReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({ favReducer });

// export const Store = createStore(rootReducer);
export const Store = configureStore({ reducer: rootReducer });
