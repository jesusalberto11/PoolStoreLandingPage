import React from "react";
import "../../../styles/sections/MainSection/MainSection.css";
import { useBackgroundImage } from "../../../hooks/useBackgroundImage";
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { currentBackgroundImage } = useBackgroundImage();
  const [t] = useTranslation("global");

  return (
    <section id="section-1" className="section-container">
      <div
        className="main-section"
        style={{ backgroundImage: `url(${currentBackgroundImage})` }}
      >
        <div className="main-section-left-side">
          <h1 className="header-m1">{t("MAIN-SECTION.MAIN-SECTION-TITLE")}</h1>
          <p>{t("MAIN-SECTION.MAIN-SECTION-SUBTITLE")}</p>
          <a
            type="button"
            className="contact-button"
            title={t("MAIN-SECTION.CONTACT-BUTTON-TITLE")}
            href="#section-4"
          >
            {t("MAIN-SECTION.CONTACT-BUTTON-TITLE")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
