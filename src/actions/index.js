export const setActiveTab = tabName => {
  return {
    type: 'SET_ACTIVE_TAB',
    payload: tabName
  };
};

export const setSearchedValue = value => {
  return {
    type: 'SET_SEARCHED_VALUE',
    payload: value
  };
};

export const setSearchedResults = results => {
  return {
    type: 'SET_SEARCHED_RESULTS',
    payload: results
  };
};

export const setLoadingStatus = status => {
  return {
    type: 'SET_LOADING_STATUS',
    payload: status
  };
};
