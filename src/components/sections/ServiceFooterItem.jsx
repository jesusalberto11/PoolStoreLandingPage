import React from "react";
import "../../styles/sections/ServiceFooterItem.css";

const ServiceFooterItem = ({ icon, title }) => {
  return (
    <div className="services-footer-item">
      <div className="services-footer-img centered">
        <svg width="48" height="48" fill="#FFF" viewBox="0 0 16 16">
          <path d={icon} />
        </svg>
      </div>
      <p className="services-footer-title">{title}</p>
    </div>
  );
};

export default ServiceFooterItem;
