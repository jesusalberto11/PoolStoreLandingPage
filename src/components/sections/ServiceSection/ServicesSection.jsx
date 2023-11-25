import React from "react";
import "../../../styles/sections/ServiceSection/ServicesSection.css";
import CommonSection from "../CommonSection";
import SectionTitle from "../SectionTitle";
import ServiceItem from "./ServiceItem";
import ServiceFooterItem from "./ServiceFooterItem";
import {
  SERVICES_DATA,
  SERVICES_FOOTER_DATA,
} from "../../../helpers/servicesData";

const ServicesSection = () => {
  return (
    <CommonSection id={"section-2"}>
      <SectionTitle firstTitle="Nuestros" secondTitle="Servicios" />
      <div className="services-container">
        {SERVICES_DATA.map(({ id, imgSource, alt, title }) => (
          <ServiceItem key={id} imgSource={imgSource} alt={alt} title={title} />
        ))}
      </div>
      <div className="services-footer-items centered">
        {SERVICES_FOOTER_DATA.map(({ id, icon, title }) => (
          <ServiceFooterItem key={id} icon={icon} title={title} />
        ))}
      </div>
    </CommonSection>
  );
};

export default ServicesSection;
