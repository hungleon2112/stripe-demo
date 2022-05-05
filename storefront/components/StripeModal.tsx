import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StripeState } from '../share/reducer'
import { Result, Modal, Form, Input, Button  } from 'antd';
import {IBook} from '../types'
import {Elements, CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { createTransaction, createPaymentIntent, confirmCardPayment } from '../share/actions/action';
import { ResultStatusType } from 'antd/lib/result';

export interface IStripeModal {
    chosenBook: IBook;
    isModalVisible: boolean;
    handleCancel: any;
}

const StripeModal: React.FC <IStripeModal> = ({...props}) => {

    const state = useSelector((state: StripeState) => state);
    const dispatch = useDispatch();
    const elements = useElements();
    const stripe = useStripe();

    type LayoutType = Parameters<typeof Form>[0]['layout'];
    const [formLayout, setFormLayout] = React.useState<LayoutType>('vertical');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState<ResultStatusType>(null);
    const [email, setEmail] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const [subMsg, setSubMsg] = React.useState('');

    const stripeClientSecret = state.common.stripeClientSecret;
    const paymentIntent = state.common.paymentIntent;

    React.useEffect(() => {
        if(stripeClientSecret){
            dispatch(confirmCardPayment(stripe, stripeClientSecret, elements.getElement(CardElement)));
        }
    }, [stripeClientSecret]);

    React.useEffect(() => {
        if(paymentIntent){
            if(paymentIntent.error){
                handleError(paymentIntent.error.message);
            }else{
                handleSuccess(paymentIntent);
            }
            setIsSubmitting(false);
        }
    }, [paymentIntent]);

    const handleSuccess = (paymentIntent) => {
        setStatus("success");
        setMsg(`Your order number is: ${paymentIntent.paymentIntent.id}`);
        setSubMsg(`Total purchased: $${paymentIntent.paymentIntent.amount / 100}`);

        dispatch(createTransaction({
            bookId: props.chosenBook.id,
            paymentId: paymentIntent.paymentIntent.id,
            email
        }));
    }

    const handleError = (msg) => {
        setStatus("error");
        setSubMsg('');
        setMsg(msg);
    }

    const handleOk = (e) => {
        e.preventDefault();
        if(email == '' || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            handleError('Email format is invalid');
            return;
        }else{
            setStatus(null);
        }
        if(!stripe || !elements){
            return;
        }
        setIsSubmitting(true);
        dispatch(createPaymentIntent({
        "paymentMethodType" : "card",
        "currency": "usd",
        "amount": props.chosenBook.price
    }));
    };

    const handleCancel = () => {
        props.handleCancel();
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const formItemLayout =
    formLayout === 'horizontal'
    ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        }
    : null;

    return (
        <Modal key={props.chosenBook.id} title={"Checkout - " + props.chosenBook.title} visible={props.isModalVisible} 
        footer={[
        <Button disabled={isSubmitting} key="pay" type={'primary'} onClick={handleOk}>Pay ${props.chosenBook.price}</Button>,
        <Button key="back" onClick={handleCancel}>
            Return
        </Button>
        ]}
        >
            <Form
                {...formItemLayout}
                layout={formLayout}
                >
                <Form.Item label="Email address" >
                    <Input placeholder="you@email.com" onChange={emailChange} />
                </Form.Item>
                <Form.Item label="Card">
                    <CardElement id="card-element" />
                </Form.Item>
                {
                    status ?
                        <Result
                            status={status}
                            title={msg}
                            subTitle={subMsg}
                        />
                    : ''
                }
            </Form>
        </Modal>
    )
}

export default StripeModal
