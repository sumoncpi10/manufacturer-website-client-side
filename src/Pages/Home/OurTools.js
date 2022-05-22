import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';


const OurTools = () => {
    const path = window.location.pathname;
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('photoInfo.json')
            .then(res => res.json())
            .then(data => setTools(data))

    }, [tools]);
    return (
        <div className=' '>
            <div className="">
                <div className="row">
                    <div className="col-lg-12 text-center my-2">
                        {/* <h3 className="py-3"><a href="https://spreeowl.com/">Spreeowl</a></h3> */}
                        <h4 className='text-4xl p-6'>Our Tools Range</h4>
                    </div>
                </div>
                <div className="portfolio-menu mt-2 mb-4 text-center">
                    <ul>
                        <li className="btn btn-outline " data-filter="*"><Link to='/photos'>All</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".gts"><Link to='/photos/weeding'>Hand Tools</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/photos/tour'>Cutting Tools</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/photos/fashion'>Industrial Tools</Link></li>
                        {/* <li className="btn btn-outline-dark text" data-filter=".selfie">Animals</li> */}
                    </ul>
                </div>


                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
                    {
                        // photos?.filter(photo => path.includes(photo.category) ? <h1>hi</h1> : '')
                        tools?.map(photo => <Tool key={photo.id} photo={photo} ></Tool>)
                    }
                    {
                        path === '/photos' ? '' : tools.length > 12 ? (<Link to='/photos'><button type="button" className="btn btn-dark m-4 btn-show ">Show More</button></Link>) : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default OurTools;