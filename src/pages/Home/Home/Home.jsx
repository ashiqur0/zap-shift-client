import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import TrustedSalesTeam from '../TrustedSalesTeam/TrustedSalesTeam';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <TrustedSalesTeam />
        </div>
    );
};

export default Home;