import * as types from '../types/type'
import axios from "axios";
import {ErrorHandle} from "./helper";

export const loadBook = () => (dispatch) => {
    
    axios.get(process.env.API_URL + `book`)
        .then(res => {
            let bookList = res.data.data;
            dispatch({
                type: types.LOAD_BOOK,
                bookList: bookList
            })
        })
        .catch(function(error) {
            ErrorHandle(error.response.status)
        })
}

export const createPaymentIntent = (data) => (dispatch) => {
    
    axios.post(process.env.API_URL + `stripe/payment-intent`, data)
        .then(res => {
            let stripeClientSecret = res.data.data.client_secret;
            dispatch({
                type: types.CREATE_PAYMENT_INTENT,
                stripeClientSecret: stripeClientSecret
            })
        })
        .catch(function(error) {
            ErrorHandle(error.response.status)
        })
}

export const confirmCardPayment = (stripe, stripeClientSecret, card) => async (dispatch) => {
    const paymentIntent = await stripe.confirmCardPayment(
        stripeClientSecret,
        {
          payment_method:{
            card: card,
          }
        }
      );
    dispatch({
        type: types.CONFIRM_PAYMENT,
        paymentIntent
    })
}

export const createTransaction = (data) => async () => {
    axios.post(process.env.API_URL + `transaction`, data)
    .then(res => {
        console.log(res);
    })
    .catch(function(error) {
        ErrorHandle(error.response.status)
    })
}