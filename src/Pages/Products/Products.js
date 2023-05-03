
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Tool from './Tool';


const Products = () => {
    const path = window.location.pathname;
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-website-lea9.onrender.com/products')
            .then(res => res.json())
            .then(data => setTools(data))

    }, [tools]);
    return (
        <div className='px-12'>
            <div className="">
                <Link to='/product/addProduct' className='btn'>Add Tools</Link>
                <div className="row">
                    <div className="col-lg-12 text-center my-2">

                        <h4 className='text-4xl p-6'>Our Tools Range</h4>
                    </div>
                </div>
                <div className="portfolio-menu mt-2 mb-4 text-center">
                    <ul>
                        <li className="btn btn-outline-dark" data-filter="*"><Link to='/products'>All</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".gts"><Link to='/products/hand'>Hand Tools</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/products/tour'>Cutting Tools</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/products/fashion'>Industrial Tools</Link></li>
                        <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/products/fashion'>Precision Tools</Link></li>
                        {/* <li className="btn btn-outline-dark text" data-filter=".selfie">Animals</li> */}
                    </ul>
                </div>


                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
                    {
                        // photos?.filter(photo => path.includes(photo.category) ? <h1>hi</h1> : '')
                        tools?.map(tool => <Tool key={tool._id} tool={tool} ></Tool>)
                    }
                    {
                        path === '/products' ? '' : tools.length > 12 ? (<Link to='/products'><button type="button" className="btn btn-dark m-4 btn-show ">Show More</button></Link>) : ""
                    }

                </div>
            </div>

        </div>

    );
};

export default Products;