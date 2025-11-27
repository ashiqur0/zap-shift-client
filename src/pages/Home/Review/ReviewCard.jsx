import React from 'react';
import reviewQuote from '../../../assets/reviewQuote.png'

const ReviewCard = ({review}) => {
    // console.log(review);

    return (
        <div className='p-5 bg-white rounded-3xl'>
            <img src={reviewQuote} alt="" />
            <p className='p-4 border-b border-dashed border-secondary text-txt'>{review.review}</p>

            <div className='flex items-center gap-5 mt-5'>
                <img src={review.user_photoURL} className='w-12 rounded-full' alt="" />
                <div>
                    <h3 className='text-xl text-secondary font-bold'>{review.userName}</h3>
                    <p>{review.userDesignation}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;