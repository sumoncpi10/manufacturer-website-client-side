import { faFlag, faTruck, faC, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Business = () => {
    return (
        <div className='p-20'>
            <h1 className='uppercase text-3xl text-center text-green-500 font-bold'>Millions People Trust Us</h1>
            <div className='flex justify-center p-11'>

                <div class="stats shadow">

                    <div class="stat flex flex-col">
                        <div class="stat-figure text-green-700 ">
                            <FontAwesomeIcon className='' icon={faFlag}></FontAwesomeIcon>
                        </div>

                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-title text-center text-green-700">Countries</div>

                    </div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-green-700 ">
                            <FontAwesomeIcon className='' icon={faTruck}></FontAwesomeIcon>
                        </div>

                        <div class="stat-value text-primary">20M+</div>
                        <div class="stat-title text-center text-green-700">Completed Delivery</div>

                    </div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-green-700 ">
                            <FontAwesomeIcon className='' icon={faPeopleGroup}></FontAwesomeIcon>
                        </div>

                        <div class="stat-value text-primary">7K+</div>
                        <div class="stat-title text-center text-green-700">Happy Clients</div>

                    </div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-value text-primary">8.6K+</div>
                        <div class="stat-title text-center text-green-700">Feedback</div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Business;