import React from "react";
import "../../styles/sections/SectionTitle.css";

const SectionTitle = ({
  firstTitle = "First title",
  secondTitle = "Second title",
}) => {
  return (
    <div className="section-header centered">
      <p className="section-header-title-1">
        {firstTitle}{" "}
        <span className="section-header-title-2">{secondTitle}</span>
      </p>
    </div>
  );
};

export default SectionTitle;
