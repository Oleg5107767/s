const initialState = {
    sheet : "Categorys",
    categorys: [],
    categoryProduct: [],
    CartAllItems: [],
    totalPrice: 0,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SHEET':
            return {
                ...state,
                sheet: action.payload
            }
        case 'CATEGORYS': 
            return {
                ...state,
                categorys: action.payload
            }
        case 'CATEGORY_PRODUCT': 
            return {
                ...state,
                categoryProduct: action.payload
            }
        case 'ADD_ITEM':
            return {
                ...state,
                CartAllItems: [...state.CartAllItems, action.payload]
            }
        case 'CHANGE_CARTITEM':
            return {
                ...state,
                CartAllItems:  action.payload
            }

        default: return state
    }
}

export default reducer;