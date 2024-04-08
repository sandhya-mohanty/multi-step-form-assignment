import React, { useState } from "react";
import Latex from "react-latex";

const Step4 = ({ setPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleLevelSelection = (index) => {
    setSelectedItem(index);
  };

  const isContinueButtonEnabled = selectedItem !== null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-4 mt-20 p-7">
      <h1 className="text-3xl font-bold mb-8 text-center">
        What is your math comfort level?
      </h1>
      <p className="text-lg mb-4 text-center">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  mt-8">
        <div className={`px-4 py-2 rounded-md text-lg border flex justify-center items-center ${selectedItem === "index1" ? "border-yellow-500" : "border-gray-300"}`} onClick={() => handleLevelSelection("index1")}>
          <div className="flex flex-col text-center">
            <Latex displayMode={true}>$$5\times \frac 12=?$$</Latex>
            <span>Arithmetic</span>
            <span className="text-gray-500">Introductory</span>
          </div>
        </div>

        <div className={`px-4 py-2 rounded-md text-lg border flex justify-center items-center ${ selectedItem === "index2" ? "border-yellow-500" : "border-gray-300"}`} onClick={() => handleLevelSelection("index2")}>
          <div className="flex flex-col text-center">
            <Latex displayMode={true}>$$3x+5=4$$</Latex>
            <span>Basic Algebra</span>
            <span className="text-gray-500">Foundational</span>
          </div>
        </div>

        <div className={`px-4 py-2 rounded-md text-lg border flex justify-center items-center ${ selectedItem === "index3" ? "border-yellow-500" : "border-gray-300"}`}onClick={() => handleLevelSelection("index3")}>
          <div className="flex flex-col text-center">
            <Latex displayMode={true}>{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`}</Latex>
            <span>Intermediate Algebra</span>
            <span className="text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className={`px-4 py-2 rounded-md text-lg border flex justify-center items-center ${selectedItem === "index4" ? "border-yellow-500" : "border-gray-300"}`} onClick={() => handleLevelSelection("index4")} >
          <div className="flex flex-col text-center">
            <Latex displayMode={true}>{`$$ \\int_{0}^{L}x^{2}dx=? $$ `}</Latex>
            <span>Calculus</span>
            <span className="text-gray-500">Advanced</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className={`border py-2 px-7 rounded-md flex items-center w-full lg:w-200 ${ isContinueButtonEnabled ? "bg-black text-white": "bg-gray-300 text-gray-500 cursor-not-allowed" }`}
          disabled={!isContinueButtonEnabled}
          onClick={() => setPage(5)}>
          <span className="text-center w-full">Continue</span>
        </button>
      </div>
    </div>
  );
};

export default Step4;
