import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from '../Home/Review';
const Officials = () => {
    const [reviews, setReviews] = useState([]);
    const path = window.location.pathname;

    useEffect(() => {
        const apiUrl = path.includes('testimonials')
            ? 'http://localhost:5000/reviewsall'
            : 'http://localhost:5000/reviews';

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error("Error fetching reviews:", error));
    }, [path]);

    return (
        <section className='my-28 lg:px-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Officials</h4>
                    <h2 className='text-3xl'>Our Board Of Directors</h2>
                </div>
                {/* <div>

                    <img src={quote} className="w-24 lg:w-48" alt="Quote Icon" />
                </div> */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                {/* {reviews.map(review => (
                    <Review key={review._id} review={review} />
                ))} */}
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">

                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>Eng Md Abul Hasan</h4>
                                <p>Chairman (Acting) & Managing Director</p>
                                <p>Email: gmahassan65@gmail</p>
                                <p>Phone: +880 1306-517716</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">

                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>Mst Jannatul Nayim</h4>
                                <p>Executive Secretary </p>
                                <p>Email: nahin.feeda036@gmail.com</p>
                                <p>Phone: +880 1725-701223</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">

                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>Laila Farzana Islam </h4>
                                <p>Chief Commercial Officer</p>
                                <p>Email: jas.20911775@gmail.com</p>
                                <p>Phone: +880 1972-509424</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Officials;
