import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';

const About = () => {
    return (
        <div>
            {/* <Topbanar></Topbanar> */}
            <div className='m-3'>
                <div class="hero bg-base-200 min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img
                            src="https://www.abpowerbd.com/images/electrical-solution-provider.webp"
                            class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">Electricity Power solution company in Bangladesh!</h1>
                            <p class="py-6">
                                AB Power Engineering Ltd. is a leading electricity power solution company in Bangladesh, providing top-quality substations, Switch Gear, Power Generators, and Power Transformers, and reliable service & solutions for industries & businesses. With a legacy of excellence spanning over five decades, we stand as a cornerstone in power solutions.

                                Since 1969, with a rich history of reliability and expertise, we've been dedicated to providing dependable power solutions for industries and businesses nationwide as part of the AB Power Group of Companies. Trust us for unparalleled expertise and service in power solutions.
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                {/* <h6 className='text-center text-2xl'>Developed By </h6>
                <img width={300} src="" alt="" />
                <h2 className='p-2 text-center text-3xl'>Md. Dawdujjaman Sumon</h2> */}
            </div>
            {/* <div className=''>
                <p className='text-center'>This is a Tools Manufacturing website. Here an organization can do all their work including Order management, updates.</p>
            </div> */}
        </div>
    );
};

export default About;