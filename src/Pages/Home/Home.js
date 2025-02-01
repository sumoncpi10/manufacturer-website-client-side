import React from 'react';
import About from '../About/About';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import Products from '../Products/Products';
import Officials from '../Officials/Officials';

import Footer from '../Shared/Footer';
import Banner from './Banner';

import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Testimonials />
            <Officials></Officials>
            <MyPortfolio></MyPortfolio>

        </div>
    );
};

export default Home;