import React, { useContext, useEffect, useState } from 'react';
import './Payment.css'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../Providers/AuthProviders';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_Pk);


const Payment = () => {
    const { user } = useContext(AuthContext);
    const [allClasses, setAllClasses] = useState([]);
    const total = allClasses.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/enrolled/email/${user.email}`)
                .then((res) => res.json())
                .then((data) => setAllClasses(data));
        }
    }, [user]);
    return (
        <div>
            <h2 className='payHeader'>Here are Your payment for {allClasses.length} Courses</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;