import {createSlice} from "@reduxjs/toolkit";
import {INITIAL_USER} from "../../utils/test";
const initialState = INITIAL_USER

export const userSlice = createSlice({
    name: 'user',
    initialState: () => initialState,
    reducers: {
        pickUp: (state, action)=> {
            // const markAsRentList = action.payload.map((el=>{
            //     if(el.selected){
            //         return {...el, selected: !el.selected, rented: !el.rented}
            //     }
            // }))
            state.toolsList = state.toolsList.concat(action.payload);
        },
        markAsSelect: (state, action)=> {
            state.toolsList = state.toolsList.map((el)=> el.id === action.payload ? {...el, selected: true} : el)
        },
        markAsReturned: (state, action)=> {
            state.toolsList = state.toolsList.map((el)=> el.id === action.payload ? {...el, selected: false, returned: true, available: true, rented: false} : el)
        },
        removeReturnedTools: (state, action) => {
            state.toolsList = state.toolsList.filter(el => !el.returned)
        },
        fromSelectToRent: (state, action)=> {
            state.toolsList = action.payload.map((el)=> el.selected ? {...el, selected: false, rented: true, available: false}: el)
        },
        setIssue: (state, action) => {
            state.toolsList = state.toolsList.map(el => el.id === action.payload.id ? {...el, error: {status: true, message: action.payload.message}} : el)
        },
        selectToReturn: (state, action) => {
            state.toolsList = state.toolsList.map(el => el.id === action.payload ? {...el, selected: true} : el)
        }

    }
})

export const {pickUp, fromSelectToRent, selectToReturn, markAsSelect, markAsReturned, setIssue, removeReturnedTools} = userSlice.actions;
export default userSlice.reducer;