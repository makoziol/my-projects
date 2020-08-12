const setSearchdValueReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCHED_VALUE':
      return action.payload;
    default:
      return state;
  }
};

export default setSearchdValueReducer;
