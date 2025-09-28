import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className=" algn-center movie-filter">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
            minRating == rate ? "movie-filter-item active" : "movie-filter-item"
          }
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
