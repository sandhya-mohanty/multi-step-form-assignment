import React, { useState } from 'react';

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starCount = index + 1;
        return (
          <span
            key={starCount}
            onClick={() => handleStarClick(starCount)}
            className={`text-3xl ${
              starCount <= selectedStars ? 'text-yellow-500' : 'text-yellow-400'
            } cursor-pointer`}
          >
            {starCount <= selectedStars ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
