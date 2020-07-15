const tokenReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case 'CHANGE_TOKEN':
      return {
        ...state,
        token: action.newToken,
      };
    case 'LOGOUT':
      return { ...state, token: null };
    default:
      return state;
  }
};


export default tokenReducer;
