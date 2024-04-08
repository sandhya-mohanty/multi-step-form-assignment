import React from "react";
import video from "../assets/image/video1.mp4";
import StarRating from "../components/StarRating";

const Step5 = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center mt-10 p-7 ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 ">
        <div className="w-full lg:w-1/2 lg:max-w-sm">
          <video src={video} className="w-full" ></video>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-5 text-center lg:text-left">
            You're on your way!
          </h1>
          <span className="mb-2"><StarRating totalStars={5}/></span>

          <p className="text-base lg:text-lg text-start lg:text-left">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <div className="mt-4 ml-10">
            <span>- Jacob S.</span>
          </div>
        </div>
      </div>

      <button className="border py-2 px-10 mt-5 rounded-md bg-black text-white flex items-center w-full lg:w-200 " onClick={() => setPage(6)}>
        <span className="text-center w-full">Continue</span>
      </button>
    </div>
  );
};

export default Step5;
