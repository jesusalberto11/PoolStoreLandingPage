import React from "react";
import "../../../styles/sections/ServiceSection/ServiceItem.css";

const ServiceItem = ({ imgSource, alt, title }) => {
  return (
    <div className="service-item">
      <img className="service-item-image centered" src={imgSource} alt={alt} />
      <p className="service-title">{title}</p>
    </div>
  );
};

export default ServiceItem;
