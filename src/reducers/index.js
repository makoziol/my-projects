import { combineReducers } from 'redux';
import setActiveTabReducer from './setActiveTabReducer';
import setSearchedResultsReducer from './setSearchedResultsReducer';
import setLoadingStatusReducer from './setLoadingStatusReducer';
import setSearchedValueReducer from './setSearchedValueReducer';

const allReducers = combineReducers({
  setActiveTab: setActiveTabReducer,
  setSearchedResults: setSearchedResultsReducer,
  setLoadingStatus: setLoadingStatusReducer,
  setSearchedValue: setSearchedValueReducer
});

export default allReducers;
