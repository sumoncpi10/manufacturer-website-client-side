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
                            <h1 class="text-5xl font-bold">Mukti Power Private Ltd company in Bangladesh!</h1>
                            <p class="py-6">
                                Mukti Power Private Ltd came into existence with the objective of ensuring safe power supply and self-employment by supplying quality equipment to the power sector of the country. For this purpose, some committed and experienced technical know-how has been laid for release by coordinating the entire management. It is an established fact that we are determined not to deviate from the standard of supply equipment as we seek to create employment. That is why we have established business relationships with European and Chinese high-quality companies from the very beginning. On the other hand, in order to establish communication with our employees from all parts of the country, the door will be open to everyone so that everyone can participate in the company. Our honesty, devotion and service mentality is the only way for us to go so that all the customers of the country as well as the power sector get better service.
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