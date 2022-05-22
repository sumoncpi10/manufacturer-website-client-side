import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ photo }) => {


    const path = window.location.pathname;
    // console.log(path);
    // if ((path !== '/photos') && (path !== '/home') && (path !== '/') && !path.includes(photo.category)) {
    //     return
    // }
    const { img, id, name } = photo;

    // if ((path !== '/photos') && id > 11) {
    //     return
    // }

    return (
        <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;