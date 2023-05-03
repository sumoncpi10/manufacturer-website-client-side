import { fa1, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import '../PlaceOrder/PlaceOrder.css'

const PlaceOrder = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const params = useParams();
    const [product, setProduct] = useState([]);
    let [price, setPrice] = useState(0);
    let [quantity, setQuantity] = useState(0);
    let [total, setTotal] = useState(0);
    const shipping = 23;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    let signInError;
    useEffect(() => {
        fetch(`https://manufacturer-website-lea9.onrender.com/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct(data);
                setPrice(data.price);
                setQuantity(data.minquantity);
            })
    }, []);

    const handleQuantityPlus = (e) => {
        e.preventDefault();
        quantity = parseInt(quantity) + 1;
        price = quantity * product.price;
        setQuantity(quantity);
        setPrice(product.price);
        setTotal(price);
        // if (quantity < product.quantity) {
        //     quantity = parseInt(quantity) + 1;
        //     price = quantity * product.price;
        //     setQuantity(quantity);
        //     setPrice(product.price);
        //     setTotal(price);
        // }
        // else {
        //     toast(`Stock Quantity is ${product.quantity}`);
        // }
    }
    const handleQuantityMinus = (e) => {
        e.preventDefault();
        quantity = quantity - 1;
        price = quantity * product.price;
        setQuantity(quantity);
        setPrice(product.price);
        setTotal(price);
        // if (quantity > product.minquantity) {
        //     quantity = quantity - 1;
        //     price = quantity * product.price;
        //     setQuantity(quantity);
        //     setPrice(product.price);
        //     setTotal(price);
        // }
        // else {
        //     toast(`Min. Order Quantity ${product.minquantity}`);
        // }

    }

    const onSubmit = async e => {
        // console.log(e)
        const email = user.email;
        const clientName = e.clientname;
        const productID = product._id;
        const productName = product.name;
        const address = e.address;
        const zipCode = e.zipcode;
        const city = e.city;
        const country = e.country;
        quantity = quantity ? quantity : product.minquantity;
        price = price ? price : product.price;
        const img = product.img;
        const today = new Date(), date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const order = { email, clientName, productID, productName, address, zipCode, city, country, quantity, price, shipping, img, date };
        console.log(order);
        fetch('https://manufacturer-website-lea9.onrender.com/addorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast("Order Placed Successfully!");
                reset();
            })

    }
    return (
        <div className='mx-16 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse'>
                <div className='flex h-screen justify-center '>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Shipping Address</h2>
                            <div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        value={user?.displayName}
                                        {...register("clientname", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.clientname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clientname.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        value={user?.email}
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Shipping Address </span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Description Name" name='description'
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>
                                </div>

                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Zip Code</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Zip Code"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("zipcode", {
                                        required: {
                                            value: true,
                                            message: 'Zip Code is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.zipcode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.zipcode.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your City"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: 'City is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Country"
                                    className="input input-bordered w-full max-w-xs"
                                    value='Bangladesh'
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.country?.type === 'required' && <span className="label-text-alt text-red-500">{errors.country.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone </span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Please Provide number" name='description'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>


                            {signInError}


                            <p><small className='text-center font-serif text-2xl text-red-500'>Make Sure Address is Accurate!!! </small></p>


                        </div>
                    </div>
                </div >





                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub Total</th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <p className='text-1xl'> <span className='text-red-500'>Min Order Qty:</span> {product.minquantity}</p>
                                            <p className='text-1xl'> <span className='text-indigo-500'>Available Quentity:</span> {product.quantity}</p>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.price}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Per unit</span>
                                </td>
                                <td className="product-quantity " data-title="Quantity">
                                    <button onClick={handleQuantityMinus}> - </button>
                                    <input className='  w-12' type="text" value={quantity} />
                                    <button onClick={handleQuantityPlus}> + </button>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">${price * quantity}</button>
                                </th>
                            </tr>
                            <tr className='bg-white'>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Shipping</th>
                                <th> ${shipping} </th>

                            </tr>
                            <tr className='bg-white'>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total Price</th>
                                <th> ${(price * quantity) + shipping} </th>

                            </tr>
                            <tr className='bg-white'>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th> <button className='btn' disabled={quantity > product?.quantity || quantity < product?.minquantity} >Place Order</button> </th>

                            </tr>
                        </tbody>
                        {/* <!-- foot --> */}
                        <tfoot >

                        </tfoot>

                    </table>
                </div>
            </form >
        </div >
    );
};


export default PlaceOrder;