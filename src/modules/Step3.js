import React from "react";
import images from "../assets/image/effective.png";

const Step3 = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center  p-7">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 ">
        <div>
          <img src={images} alt="Effective Learning"></img>
        </div>
        <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-5 text-center lg:text-left">
            Learning on Brilliant is effective and fun
          </h1>
          <p className="text-base lg:text-lg text-start lg:text-left">
            You'll interact with concepts and solve fun problems in math,
            science, and computer science. Brilliant helps you train your
            critical thinking and creative problem-solving skills.
          </p>
        </div>
      </div>

      <button className="border py-2 px-10 mt-10 rounded-md bg-black text-white flex items-center w-full lg:w-200 " onClick={() => setPage(4)}>
        <span className="text-center w-full">Continue</span>
        </button>
    </div>
  );
};

export default Step3;
