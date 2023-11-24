import React from "react";
import "../../styles/sections/ReviewSection.css";
import SectionTitle from "./SectionTitle";
import CommonSection from "./CommonSection";
import { REVIEWS_DATA } from "../../helpers/reviewsData";

const ReviewSection = () => {
  return (
    <CommonSection id={"section-3"}>
      <SectionTitle firstTitle="Nuestros felices" secondTitle="Clientes" />
      <div className="reviews-container">
        {REVIEWS_DATA.map(
          ({ id, imgSource, alt, username, description, rating }) => (
            <div className="review-item" key={id}>
              <div className="user-review-header">
                <img src={imgSource} alt={alt} className="user-review-img" />
                <div className="review-header-right-side">
                  <p className="review-username">{username}</p>
                  <div>{rating}</div>
                </div>
              </div>
              <p className="user-review-description">{description}</p>
            </div>
          )
        )}
      </div>
    </CommonSection>
  );
};

export default ReviewSection;
