import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {


    const path = window.location.pathname;
    // console.log(path);
    // if ((path !== '/products') && (path !== '/home') && (path !== '/') && !path.includes(tool.category)) {
    //     return
    // }
    const { img, _id, name, description, price, minquantity, quantity } = tool;

    // if ((path !== '/products') && id > 11) {
    //     return
    // }
    const NevigateToDtail = () => {

        window.location.pathname = `product/${_id}`;

    }
    return (
        <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Products" /></figure>
            <div class="card-body">
                <h2 class="card-title" title={name}>{name?.length > 30 ? name.slice(0, 30) + '...' : name}</h2>
                <p className='text-2xl'>${price}</p>
                <p className='text-1xl'> <span className='text-red-500'>Min Quentity:</span> {minquantity}</p>
                <p className='text-1xl'> <span className='text-indigo-500'>Available Quentity:</span> {quantity}</p>
                <p><small title={description}>{description?.length > 70 ? description.slice(0, 70) + '...' : description}</small></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" onClick={NevigateToDtail}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;