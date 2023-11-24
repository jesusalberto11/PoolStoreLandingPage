import React from "react";
import "../../styles/sections/CommonSection.css";

const CommonSection = ({ id, children }) => {
  return (
    <section id={id} className="common-section">
      <div className="common-section-container ">{children}</div>
    </section>
  );
};

export default CommonSection;
