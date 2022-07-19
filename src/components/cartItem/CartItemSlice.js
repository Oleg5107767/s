import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}

const cartItemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.filter(el => el.id === action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        }
    },
});
const {actions, reducer} = cartItemSlice;

export default reducer;
export const { addItem, removeItem, clearItems } = actions;