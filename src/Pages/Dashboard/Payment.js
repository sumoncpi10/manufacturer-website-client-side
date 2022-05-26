// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const url = `http://localhost:5000/order/${id}`;

    useEffect(() => {

        fetch(`http://localhost:5000/order/${id}`)
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
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;