const setLoadingStatusReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default setLoadingStatusReducer;
