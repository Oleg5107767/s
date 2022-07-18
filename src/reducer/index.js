const initialState = {

  sheet: "Categorys",
 // activeCategories: [],
 // activeItem: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_SHEET' :
          return { 
            ...state,
            sheet: action.payload 
          };
          case 'ACTIVE_CATEGORIES' :
            return { 
              ...state,
              activeCategories: action.payload 
            }; 
            case 'ACTIVE_ITEM' :
            return { 
              ...state,
              activeItem: action.payload 
            }; 
      default:
        return state;
    }
  }
  export default reducer;