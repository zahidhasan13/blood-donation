import React from 'react';
import Hero from '../components/Hero';
import WhyDonate from '../components/WhyDonate';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero/>
            <WhyDonate/>
            <HowItWorks/>
            <CTA/>
            <Testimonials/>
        </div>
    );
};

export default Home;