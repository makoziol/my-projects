const setSearchedResultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCHED_RESULTS':
      return action.payload;
    default:
      return state;
  }
};

export default setSearchedResultsReducer;
