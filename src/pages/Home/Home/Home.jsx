import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import TrustedSalesTeam from '../TrustedSalesTeam/TrustedSalesTeam';
import Features from '../Features/Features';
import Aim from '../Aim/Aim';
import CustomersComments from '../CustomersComments/CustomersComments';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <TrustedSalesTeam />
            <Features />
            <Aim />
            <CustomersComments />
            <FAQ />
        </div>
    );
};

export default Home;