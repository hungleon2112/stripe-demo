import '../styles/globals.scss'
import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { useStore } from '../share/store'
import Head from 'next/head'
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

export default function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialReduxState)
    const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
    return (
        <Elements stripe={stripePromise}>
            <Provider store={store}>
                <Head>
                    <title>Stripe</title>
                </Head>
                <Component {...pageProps} />
            </Provider>
        </Elements>
    )
}
