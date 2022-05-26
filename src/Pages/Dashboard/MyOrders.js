import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://ancient-sierra-92602.herokuapp.com/order?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    console.log(data)
                });

        }
    }, [user]);
    const handleRemoveProduct = order => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        console.log(order)
        if (proceed) {
            fetch(`https://ancient-sierra-92602.herokuapp.com/order/${order._id}`, {
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
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            <th>Cancel Order</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
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
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button class="btn btn-xs">Pay</button></Link>}
                                    {(a.price && a.paid) && <button class="btn btn-xs">Paid</button>}
                                </td>
                                <td>{
                                    user?.email ?
                                        <div className='d-flex align-items-center pe-3 '>
                                            <button className='border-0 rounded-circle delete-button  p-2' onClick={() => handleRemoveProduct(a)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                                        </div>
                                        :
                                        ''
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



            {/* <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div> */}





        </div>
    );
};

export default MyOrders;