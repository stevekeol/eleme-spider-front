/*
 * @file main file for reducers
 */

import { combineReducers } from 'redux';
// import items from './items';
// import editor from './editor';
import defaultEntry from './defaultEntry';
import cityInfo from './download';
import excel from './excel';
// import remoteRequest from './remoteRequest';

const rootReducer = combineReducers({
  defaultEntry,
  cityInfo,
  excel
});

export default rootReducer;
