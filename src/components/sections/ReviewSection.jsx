import React from "react";
import "../../styles/sections/ReviewSection.css";
import CommonSection from "./CommonSection";
import SectionTitle from "./SectionTitle";
import ReviewItem from "./ReviewSection/ReviewItem";
import { REVIEWS_DATA } from "../../helpers/reviewsData";

const ReviewSection = () => {
  return (
    <CommonSection id={"section-3"}>
      <SectionTitle firstTitle="Nuestros felices" secondTitle="Clientes" />
      <div className="reviews-container">
        {REVIEWS_DATA.map(
          ({ id, imgSource, alt, username, description, rating }) => (
            <ReviewItem
              key={id}
              imgSource={imgSource}
              alt={alt}
              username={username}
              description={description}
              rating={rating}
            />
          )
        )}
      </div>
    </CommonSection>
  );
};

export default ReviewSection;
