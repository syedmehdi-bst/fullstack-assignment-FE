import React from "react";
import filledStar from "./../assets/filledStar.svg";
import emptyStar from "./../assets/emptyStar.svg";

const Rating = ({ rating }) => {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i, num) => (
        <img key={i} src={rating >= i ? filledStar : emptyStar} />
      ))}
    </div>
  );
};

export default Rating;
