import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Features from '../Features/Features';
import Aim from '../Aim/Aim';
import Review from '../Review/Review';
import FAQ from '../FAQ/FAQ';
import Brands from '../Brands/Brands';

const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <Brands />
            <Features />
            <Aim />
            <Review reviewPromise={reviewPromise} />
            <FAQ />
        </div>
    );
};

export default Home;