import { type } from 'os';
import { stat } from 'fs';
import * as types from '../types/type'
import {IBook} from '../../types/index'

export interface CommonReducerState {
    bookList: IBook[];
    stripeClientSecret: string;
    paymentIntent: any;
}

const initialState = {
    bookList: [],
    stripeClientSecret: null,
    paymentIntent: null
};

const commonReducer = (state: CommonReducerState = initialState, action: any): CommonReducerState => {
    switch (action.type) {
        case types.LOAD_BOOK:
            return{
                ...state,
                bookList: action.bookList
            }
        case types.CREATE_PAYMENT_INTENT:
            return{
                ...state,
                stripeClientSecret: action.stripeClientSecret
            }
        case types.CONFIRM_PAYMENT:
            return{
                ...state,
                paymentIntent: action.paymentIntent
            }
    

        default:
            return state
    }
}

export default commonReducer;