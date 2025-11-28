import React from 'react';
import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moon_star from '../../../assets/brands/moon_star.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import star_people from '../../../assets/brands/start_people.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const brandsLogo = [amazon, casio, moon_star, randstad, star, star_people];

const Brands = () => {
    return (
        <div className='mb-20 md: max-w-275 mx-auto'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary text-center mb-10'>We've helped thousands of sales teams</h1>

            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
            >
                {
                    brandsLogo.map((logo, index) =>
                        <SwiperSlide key={index}>
                            <img src={logo} className='mb-10' alt="" />
                        </SwiperSlide>
                    )}
            </Swiper>
        </div>
    );
};

export default Brands;