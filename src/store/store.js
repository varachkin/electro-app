import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tableReducer from '../features/table/tableSlice'
import userReducer from '../features/user/userSlice'
import actionReducer from '../features/actions/actionsSlice'

const rootReducer = combineReducers({
    tableReducer, userReducer, actionReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


