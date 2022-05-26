import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';

const About = () => {
    return (
        <div>
            {/* <Topbanar></Topbanar> */}
            <div className='m-3'>
                <h6 className='text-center text-2xl'>Developed By </h6>
                <img width={300} src="" alt="" />
                <h2 className='p-2 text-center text-3xl'>Md. Dawdujjaman Sumon</h2>
            </div>
            <div className=''>
                <p className='text-center'>This is a Tools Manufacturing website. Here an organization can do all their work including Order management, updates.</p>
            </div>
        </div>
    );
};

export default About;