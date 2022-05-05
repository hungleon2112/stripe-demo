import { combineReducers } from 'redux'
import commonReducer, { CommonReducerState } from "./reducers/reducer";

export interface StripeState {
    common: CommonReducerState;
}

// COMBINED REDUCERS
const reducers = {
    common: commonReducer
}

export default combineReducers(reducers)