import React from "react";
import "../../../styles/sections/ReviewSection/ReviewItem.css";

const ReviewItem = ({ imgSource, alt, username, description, rating }) => {
  return (
    <div className="review-item">
      <div className="user-review-header">
        <img src={imgSource} alt={alt} className="user-review-img" />
        <div className="review-header-right-side">
          <p className="review-username">{username}</p>
          <div>{rating}</div>
          {[...Array(rating)].map((e, i) => (
            <span className="busterCards" key={i}>
              ♦
            </span>
          ))}
        </div>
      </div>
      <p className="user-review-description">{description}</p>
    </div>
  );
};

export default ReviewItem;
