export const changeActiveSheet = (sheet) => {
    return {
        type: 'CHANGE_SHEET',
        payload: sheet
    }
}
export const categorysAdd = (arr) => {
    return {
        type: 'CATEGORYS',
        payload: arr
    }
}

export const categoryItem = (arr) => {
    return {
        type: 'CATEGORY_PRODUCT',
        payload: arr
    }
}
export const joinedCart = (arr) => {
    return {
        type: 'ADD_ITEM',
        payload: arr
    }
}
export const changeCart = (arr) => {
    return {
        type: 'CHANGE_CARTITEM',
        payload: arr
    }
}
