import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const { user } = useContext(AuthContext);
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.clientSecret);
                setClientSecret(res.clientSecret);
            });
    }, [price]);






    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent)

    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn_pay mt-4' type="submit" disabled={!stripe || clientSecret}>
                    Pay<FaDollarSign></FaDollarSign>
                </button>
            </form>
            {cardError && <p className='text-red-700'>{cardError}</p>}
        </>


    );
};

export default CheckOutForm;