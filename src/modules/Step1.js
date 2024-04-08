import React, { useState } from 'react';
import { options } from '../data/options';

const Step1 = ({ setPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const isContinueButtonEnabled = selectedItem !== null;

  return (
    <div className="container mx-auto sm:mx-auto sm:px-8 lg:px-8 p-7">
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-bold mt-10 mb-3 text-center">Which describes you best?</h1>
        <p className="text-lg text-gray-600 mb-4 text-center">This will help us personalize your experience.</p>
        <div className="flex flex-col justify-center gap-2 ">
          {options.map((item, index) => (
            <div key={index} className={`flex items-center py-4 px-5 gap-4 sm:gap-10 rounded-md mb-5 cursor-pointer ${selectedItem === index ? 'border border-yellow-500' : 'border border-gray-300'}`} onClick={() => handleItemClick(index)}>
              <img className="w-10 h-10" src={item.path} alt="" /> {item.title}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center ">
          <button className={`border py-2 px-7 rounded-md flex items-center  w-full lg:w-200 ${isContinueButtonEnabled ? 'bg-black text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}disabled={!isContinueButtonEnabled}onClick={() => setPage(2)}>
            <span className="text-center w-full">Continue</span> </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
