import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import customerTop from '../../../assets/customerTop.png'

const Review = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);

    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={customerTop} alt="" />
                <h1 className='md:text-3xl text-2xl font-extrabold text-secondary mt-5 mb-4'>What our customers are sayings</h1>

                <p className='text-txt md:max-w-175 text-center mb-5 text-txt'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id} className='mb-10'>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;