import React from 'react';

import Footer from '../Shared/Footer';
import Banner from './Banner';
import OurTools from './OurTools';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <OurTools></OurTools>
            <Testimonials />
            <Footer></Footer>
        </div>
    );
};

export default Home;