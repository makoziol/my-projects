import { combineReducers } from 'redux';
import setActiveTabReducer from './setActiveTabReducer';

const allReducers = combineReducers({
  setActiveTab: setActiveTabReducer
});

export default allReducers;
