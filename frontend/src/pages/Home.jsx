import React, { useState } from 'react';
import Hero from '../components/Hero';
import WhyDonate from '../components/WhyDonate';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import BecomeDonorModal from '../components/BecomeDonorModal';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <WhyDonate/>
            <HowItWorks/>
            <CTA isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <Testimonials/>
            {
      isModalOpen && <BecomeDonorModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    }
        </div>
    );
};

export default Home;