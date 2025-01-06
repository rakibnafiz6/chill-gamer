import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-6'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    reviews.map(review => <div key={review._id} className="card card-compact bg-[#b090c1] bg-opacity-35 w-64 h-72 shadow-xl rounded-none p-5">

                        <div className='flex gap-2'>
                            <img
                                className="w-20 h-20 rounded-full"
                                src={review.avatar}
                                alt="games" />
                            <h2 className="card-title">{review.name}</h2>
                        </div>

                        <div className=" h-[99px] pl-2 mt-2">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-gray-600'>{review.review}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;