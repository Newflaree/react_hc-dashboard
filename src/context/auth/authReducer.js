
export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[AUTH] - LogIn':
      return {
        ...state,
        isLogged: true,
        user: action.payload
      }

    case '[AUTH] - LogOut':
      return {
        ...state,
        isLogged: false,
        user: undefined
      }

    default: 
      return state;
  }
};
