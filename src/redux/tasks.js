
const initialState = {
  filter: 'SHOW_TODO',
  collection: [/* task objects here*/]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.newFilter
      };
    // other cases
    default:
      return state;
  }
};

export default reducer;
