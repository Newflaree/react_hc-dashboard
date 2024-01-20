
export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[AUTH] - LogIn':
      return {
        ...state,
        isLogged: true
      }

    case '[AUTH] - LogOut':
      return {
        ...state,
        isLogged: false
      }

    default: 
      return state;
  }
};
