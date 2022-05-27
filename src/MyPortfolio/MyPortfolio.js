import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <h1 class="mb-5 text-5xl font-bold text-gray-900">I am Md. Dawdujjaman Sumon </h1>
                    <p class="mb-5 text-4xl font-bold ">Email:<span className='text-stone-400'>sumoncpi10@gmail.com</span> </p>
                    <p class="mb-5 text-4xl font-bold ">Educational Background:<span className='text-stone-400'>Diploma in CSE & BSC in CSE Running</span> </p>
                    <p class="mb-5 text-4xl font-bold ">My Skills:<span className='text-stone-400'> REACT, MongoDB, Mysql, HTML, CSS ETC</span> </p>
                    <h6 class="mb-5 text-2xl ">Here is my Projects Below </h6>
                    {/* <h6 class="mb-5 text-2xl "><Link to='https://atz-manufacturing.web.app' target="_blank">Tools Manufacturing Website</Link></h6> */}
                    <h6 class="mb-5 text-2xl text-secondary"><a rel="noopener noreferrer" href="https://atz-manufacturing.web.app" target="_blank">1. Tools Manufacturing Website</a></h6>
                    <h6 class="mb-5 text-2xl text-secondary"><a rel="noopener noreferrer" href="https://xcn-warehouse.web.app/" target="_blank">2. Warehouse Management</a></h6>
                    <p class="mb-5">I want to work hard for do the best. I need an opportunity.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;