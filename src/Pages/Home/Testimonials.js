import React, { useEffect, useState } from 'react';

import quote from '../../assets/icons/quote.svg';

import Review from './Review';
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    const path = window.location.pathname;
    useEffect(() => {
        if (path.includes('testimonials')) {
            fetch(`https://ancient-sierra-92602.herokuapp.com/reviewsall`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    console.log(data)
                });

        }
        else if (!path.includes('testimonials')) {
            fetch(`https://ancient-sierra-92602.herokuapp.com/reviews`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    console.log(data)
                });
        }
    }, [path]);



    return (
        <section className='my-28 lg:px-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Client say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;