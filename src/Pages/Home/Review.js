import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review?.reviewDetails}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.userImg ? review?.userImg : "https://api.lorem.space/image/face?hash=33791"} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review?.reviewedBy}</h4>
                        <p>{review?.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;