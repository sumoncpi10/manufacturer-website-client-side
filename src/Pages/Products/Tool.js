import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { img, _id, name, description, price, minquantity, quantity } = tool;
    const navigate = useNavigate();  // React Router v6 hook for navigation

    // This function uses `navigate` to redirect to the product detail page.
    const navigateToDetail = () => {
        navigate(`/product/${_id}`);
    };

    return (
        <div className="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure>

                <img
                    src={img || '/placeholder.jpg'}  // Use the dynamic img URL or fallback to placeholder
                    alt={name || 'Product'}
                    onError={(e) => e.target.src = '/placeholder.jpg'} // Fallback for missing image
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title" title={name}>
                    {name?.length > 30 ? name.slice(0, 30) + '...' : name}
                </h2>
                <p className="text-2xl">৳{price}</p>
                <p className="text-1xl">
                    <span className="text-red-500">Min Quantity:</span> {minquantity}
                </p>
                <p className="text-1xl">
                    <span className="text-indigo-500">Available Quantity:</span> {quantity}
                </p>
                <p>
                    <small title={description}>
                        {description?.length > 70 ? description.slice(0, 70) + '...' : description}
                    </small>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={navigateToDetail}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
