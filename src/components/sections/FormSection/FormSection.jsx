import React from "react";
import "../../../styles/sections/FormSection/FormSection.css";
import CommonSection from "../CommonSection";
import { useTranslation } from "react-i18next";

const FormSection = () => {
  const [t] = useTranslation("global");

  return (
    <CommonSection id={"section-4"}>
      <div className="contact-form">
        <div className="container">
          <div className="contact-form-inner">
            <div className="contact-form-content">
              <h2>{t("CONTACT-SECTION.FIRST-TITLE")}</h2>
              <form action="#" method="post">
                <input
                  required
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder={t("CONTACT-SECTION.NAME-PLACEHOLDER")}
                  autoComplete="given-name"
                />
                <input
                  required
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder={t("CONTACT-SECTION.EMAIL-PLACEHOLDER")}
                  autoComplete="email"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="Solicitud de cotización"
                />
                <textarea
                  required
                  name="message"
                  placeholder={t("CONTACT-SECTION.TEXTAREA-PLACEHOLDER")}
                  autoComplete="off"
                  className="form-text-area"
                  rows="5"
                  cols="50"
                ></textarea>
                <button
                  type="submit"
                  className="submit-form-button"
                  title={t("CONTACT-SECTION.BUTTON-TITLE")}
                >
                  {t("CONTACT-SECTION.BUTTON-TEXT")}
                </button>
              </form>
            </div>
            <div className="form-img centered">
              <img
                src="img/pool-grid/pool-construction.jpeg"
                alt={t("CONTACT-SECTION.IMG-DATA")}
                title={t("CONTACT-SECTION.IMG-DATA")}
              />
              <p className="img-subtitle">
                {t("CONTACT-SECTION.IMG-SUBTITLE")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CommonSection>
  );
};

export default FormSection;
