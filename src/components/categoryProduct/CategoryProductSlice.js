import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sheet: "Categorys",
    activeCategorys: []
}

const categoryProductSlice = createSlice({
    name: "sheet",
    initialState,
    reducers: {
        changeSheet : (state, action) => {
            state.sheet = action.payload
        },
        clearSheet: (state) => {
            state.sheet = "Categorys";
        },
        saveObjs: (state, action) => {
            state.activeCategorys = action.payload//.map(el => el)
        }
    },
});
const {actions, reducer} = categoryProductSlice;

export default reducer;
export const { changeSheet, clearSheet, saveObjs } = actions;