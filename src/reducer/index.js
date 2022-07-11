const initialState = {
  loading: true,
  error: null,
  data: [],
 
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING' :
        return { 
          ...state, 
          loading: action.payload 
        };
      case 'ERROR' :
        return { 
          ...state, 
          error: action.payload 
        };
      case 'SUCCES' :
        return { 
          ...state, 
          data: action.payload 
        };
      default:
        return state;
    }
  }
  export default reducer;