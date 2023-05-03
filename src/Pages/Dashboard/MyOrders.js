import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const path = window.location.pathname;
    useEffect(() => {
        if (user && path.includes('manageOrder')) {
            fetch(`https://manufacturer-website-lea9.onrender.com/orders`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    console.log(data)
                });

        }
        else if (user && !path.includes('manageOrder')) {
            fetch(`https://manufacturer-website-lea9.onrender.com/order?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    // console.log(data)
                });
        }
    }, [path]);
    const handleRemoveProduct = order => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        // console.log(order)
        if (proceed) {
            fetch(`https://manufacturer-website-lea9.onrender.com/order/${order._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const rest = orders.filter(pd => pd._id !== order._id);
            // console.log(rest);
            setOrders(rest);
            // removeFromDb(product.id);
        }
    }
    const handleDeliveredProduct = order => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        console.log(order)
        // if (proceed) {
        //     fetch(`https://manufacturer-website-lea9.onrender.com/order/${order._id}`, {
        //         method: 'DELETE'
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data))

        //     const rest = orders.filter(pd => pd._id !== order._id);
        //     // console.log(rest);
        //     setOrders(rest);
        //     // removeFromDb(product.id);
        // }
        const delivered = {
            order: order?._id,
            // transactionId: paymentIntent.id
        }
        fetch(`https://manufacturer-website-lea9.onrender.com/delivered/${order?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(delivered)
        }).then(res => res.json())
            .then(data => {
                // setProcessing(false);
                console.log(data);
            })

    }
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Order Date</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Shipping</th>
                            <th>Sub Total</th>
                            <th>Payment</th>
                            {path.includes('manageOrder') ? <th>Status</th> : <th>Cancel Order</th>}


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={a.img} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{a.productName}</td>
                                <td>{a.date}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>{a.shipping}</td>
                                <td>{a.shipping + (a.price * a.quantity)}</td>
                                <td>
                                    {(a.price && !a.paid && !path.includes('manageOrder')) && <Link to={`/dashboard/payment/${a._id}`}> <button className="btn btn-xs">Pay</button></Link>}
                                    {(a.price && !a.paid && path.includes('manageOrder')) && <button className="btn btn-xs">Unpaid</button>}
                                    {(a.price && a.paid && !a.delivered) && <button className="btn btn-xs btn-primary">Processing</button>}
                                    {(a.price && a.paid && a.delivered) && <button className="btn btn-xs btn-primary">Shipped</button>}
                                </td>
                                <td>{
                                    user?.email ?
                                        <div className='d-flex align-items-center pe-3 '>
                                            {(admin && !path.includes('manageOrder') && a.price && a.paid) && <button className="btn btn-xs btn-secondary">Confirmed</button>}

                                            {(!admin && a.price && a.paid) && <button className="btn btn-xs btn-secondary">Confirmed</button>}

                                            {(admin && path.includes('manageOrder') && a.price && a.paid && !a.delivered) && <button className="btn btn-xs btn-success" onClick={() => handleDeliveredProduct(a)}>Click To Delivered</button>}
                                            {(admin && path.includes('manageOrder') && a.price && a.paid && a.delivered) && <button className="btn btn-xs btn-success" onClick={() => handleDeliveredProduct(a)}>Delivered</button>}

                                            {(a.price && !a.paid) && <button className='border-0 rounded-circle delete-button  p-2' onClick={() => handleRemoveProduct(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>}
                                            {/* {(a.price && !a.paid && path.includes('manageOrder')) && <button className="btn btn-xs btn-secondary">Order placed</button>} */}
                                        </div>
                                        :
                                        ''
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrders;