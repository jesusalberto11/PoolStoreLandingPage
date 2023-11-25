import React from "react";
import "../../../styles/sections/ReviewSection/ReviewSection.css";
import CommonSection from "../CommonSection";
import SectionTitle from "../SectionTitle";
import ReviewItem from "./ReviewItem";
import { REVIEWS_DATA } from "../../../helpers/reviewsData";
import { useTranslation } from "react-i18next";

const ReviewSection = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <CommonSection id={"section-3"}>
      <SectionTitle
        firstTitle={t("REVIEWS-SECTION.FIRST-TITLE")}
        secondTitle={t("REVIEWS-SECTION.SECOND-TITLE")}
      />
      <div className="reviews-container">
        {REVIEWS_DATA[i18next.language.toUpperCase()].map(
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
