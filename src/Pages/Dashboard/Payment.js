import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3iGjFfyC4fpy8FXJArlMZa8ahCPrKdLa50mZViHH45oLPkeqOtAvG3MNuXVjNjO9IK8AMzlp8Ks51F55mVNeWF00rSKa5Xu5');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const url = `https://ancient-sierra-92602.herokuapp.com/order/${id}`;

    useEffect(() => {

        fetch(`https://ancient-sierra-92602.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                console.log(data)
            });


    }, []);

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h1>Pay For Order No {order?._id}</h1>
                    <p className="text-success font-bold">Hello, {order?.clientName}</p>
                    <h2 class="card-title">Please Pay for {order?.productName}</h2>
                    <p>Your Order Date: <span className='text-orange-700'>{order?.date}</span> at {order?.productID}</p>
                    <p>Please pay: ${order?.price * order?.quantity + order?.shipping}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;