import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            <h1 className='text-5xl text-indigo-700'>Loading..........</h1>
        </div>
    );
};

export default Loading;