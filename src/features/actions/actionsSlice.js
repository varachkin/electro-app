import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    action: null,
    animatedMode: true,
}
export const actionsSlice = createSlice({
    name: 'actions',
    initialState: () => initialState,
    reducers: {
        setActionPickUp: (state)=>{
            state.action = 'pick up'
        },
        setActionReturn: (state)=>{
            state.action = 'return'
        },
        changeAnimatedMode: (state)=>{
            state.animatedMode = !state.animatedMode
        }
    }
})

export const {setActionPickUp, setActionReturn, changeAnimatedMode} = actionsSlice.actions;
export default actionsSlice.reducer;