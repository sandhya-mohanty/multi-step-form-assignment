import React from 'react';
import image from "../assets/image/ionf2tar.png";


const Step7 = () => {
  return (
    <div className="flex flex-col items-center mt-20 p-7">
      <h1 className="text-4xl font-bold mb-4">Learning paths based on your Answers</h1>
      <p className="text-lg text-gray-600">Choose one to get started. You can switch anytime.</p>
      <div className='flex flex-col lg:flex-row gap-5 w-full max-w-screen-lg mt-20'>

        <div className='flex items-center py-7 px-5 gap-10 rounded-md border relative'>
        <div className="absolute bg-yellow-500 rounded-full border py-1 px-2 font-bold top-0 left-200 transform -translate-x-1/2 -translate-y-1/2">Most Popular</div>
          <p><strong>Fondational Math </strong>Build your foundational skills in algebra, geometry, and probability.</p>
          <img className='w-36 h-36 lg:w-48 lg:h-48' src={image} alt="Math" />
        </div>

        <div className='flex items-center py-7 px-5 gap-10 rounded-md border border-gray-300'>
          <p><strong>Fondational Math </strong>Build your foundational skills in algebra, geometry, and probability.</p>
          <img className="w-36 h-36 lg:w-48 lg:h-48" src={image} alt="Math" />
        </div>
      </div>
    </div>
  );
};

export default Step7;
