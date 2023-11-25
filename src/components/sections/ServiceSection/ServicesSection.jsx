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
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <CommonSection id={"section-2"}>
      <SectionTitle
        firstTitle={t("SERVICES-SECTION.FIRST-TITLE")}
        secondTitle={t("SERVICES-SECTION.SECOND-TITLE")}
      />
      <div className="services-container">
        {SERVICES_DATA[i18next.language.toUpperCase()].map(
          ({ id, imgSource, alt, title }) => (
            <ServiceItem
              key={id}
              imgSource={imgSource}
              alt={alt}
              title={title}
            />
          )
        )}
      </div>
      <div className="services-footer-items centered">
        {SERVICES_FOOTER_DATA[i18next.language.toUpperCase()].map(
          ({ id, icon, title }) => (
            <ServiceFooterItem key={id} icon={icon} title={title} />
          )
        )}
      </div>
    </CommonSection>
  );
};

export default ServicesSection;
