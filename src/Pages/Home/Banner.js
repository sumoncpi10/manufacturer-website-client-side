import React from 'react';
import cuttingTools from '../../assets/images/cutting-tools.jpg'
// import PrimaryButton from '../Shared/PrimaryButton';
// import bgChair from '../../assets/images/bg.png';
const Banner = () => {
    return (
        // <div class="hero min-h-screen" style={{
        //     background: `url(${bgChair})`
        // }}>
        //     <div class="hero-content flex-col lg:flex-row-reverse">
        //         <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 class="text-5xl font-bold">Box Office News!</h1>
        //             <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <PrimaryButton>Get Started</PrimaryButton>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={cuttingTools} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;