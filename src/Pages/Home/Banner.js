import React from 'react';
import cuttingTools from '../../assets/images/cutting-tools.jpg'
// import PrimaryButton from '../Shared/PrimaryButton';
// import bgChair from '../../assets/images/bg.png';
const Banner = () => {
    return (

        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={cuttingTools} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;