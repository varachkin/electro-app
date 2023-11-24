import {createSlice} from "@reduxjs/toolkit";
import {ININIAL_CATEGORIES, INITIAL_TOOLS} from "../../utils/test";
const initialState = {
    tools: INITIAL_TOOLS || [],
    categories: ININIAL_CATEGORIES || [],
    list: []
};

export const tableSlice = createSlice({
    name: 'list',
    initialState: () => initialState,
    reducers: {
        removeFromList: (state, action) => {
            state.tools = state.tools.map(el => el.id === action.payload ? {...el, selected: !el.selected, available: true} : el)
        },
        selectTool: (state, action)=> {
            state.tools = state.tools.map(el => el.id === action.payload ? {...el, selected: !el.selected} : el)
        },
        changeSelectToRent: (state)=> {
            state.tools = state.tools.map((el)=> el.selected ? {...el, selected: false, rented: true, available: false} : el)
        },
        clearList: (state)=> {
            state.tools = state.tools.map((el)=> el.selected? {...el, selected: false} : el)
        },
        markAsAvailable: (state, actions)=>{
            state.tools = state.tools.map(el => el.id === actions.payload ? {...el, available: true, selected: false, returned: false} : el)
        }


    }
})

export const {clearList, removeFromList, selectTool, changeSelectToRent, markAsAvailable} = tableSlice.actions;
export default tableSlice.reducer;