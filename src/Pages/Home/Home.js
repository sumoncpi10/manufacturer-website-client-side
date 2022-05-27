import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';

import Footer from '../Shared/Footer';
import Banner from './Banner';

import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <Testimonials />
            <About></About>

        </div>
    );
};

export default Home;