import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as appReducer} from "../redux/appRedux/reducer";


const rootReducer=combineReducers({appReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))