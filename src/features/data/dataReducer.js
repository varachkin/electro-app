import {createSlice} from "@reduxjs/toolkit";
import {ININIAL_CATEGORIES, INITIAL_TOOLS} from "../../utils/test";
const initialState = {
    tools: INITIAL_TOOLS || [],
    categories: ININIAL_CATEGORIES || [],
    list: []
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: () => initialState,
    reducers: {
        setData: (state, actions)=>{

        },
        

    }
})

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;