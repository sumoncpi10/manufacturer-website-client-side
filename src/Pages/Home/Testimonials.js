import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import auth from '../../firebase.init';
import Review from './Review';
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);
    const path = window.location.pathname;
    useEffect(() => {
        if (user && path.includes('testimonials')) {
            fetch(`http://localhost:5000/reviewsall`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    console.log(data)
                });

        }
        else if (user && !path.includes('testimonials')) {
            fetch(`http://localhost:5000/reviews`)
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