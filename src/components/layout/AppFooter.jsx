import React from "react";
import "../../styles/layout/AppFooter.css";
import SimpleButton from "../shared/SimpleButton";
import { SVG_ICONS } from "../../helpers/svgIcons";
import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      <div className="footer-left-side">
        <h3>{t("FOOTER.ABOUT-US-TITLE")}</h3>
        <p>{t("FOOTER.ABOUT-US-DESCRIPTION")}</p>
      </div>
      <div className="contact-info">
        <div className="footer-center-side">
          <h3>{t("FOOTER.GENERAL-INFO")}</h3>
          <p>{t("FOOTER.MEET-US")}</p>
          <p>{t("FOOTER.FREQUENT-QUESTIONS")}</p>
          <p>{t("FOOTER.PRIVACY-POLICY")}</p>
          <p>{t("FOOTER.PQRS")}</p>
        </div>
        <div className="footer-right-side">
          <h3>{t("FOOTER.CONTACT-TITLE")}</h3>
          <p>
            <strong>{t("FOOTER.LANDLINE-PHONE")}</strong> +57 4468996
          </p>
          <p>
            <strong>{t("FOOTER.PHONE")}</strong> +57 312 525 1219
          </p>
          <p>
            <strong>{t("FOOTER.WHATSAAP")}</strong> +57 302 521 1319
          </p>
          <div className="footer-social-media-buttons-container">
            <SimpleButton
              title={t("FOOTER.FACEBOOK-BUTTON-DATA")}
              icon={SVG_ICONS.FACEBOOK}
            />
            <SimpleButton
              title={t("FOOTER.WHATSAAP-BUTTON-DATA")}
              icon={SVG_ICONS.WHATSAAP}
            />
            <SimpleButton
              title={t("FOOTER.INSTAGRAM-BUTTON-DATA")}
              icon={SVG_ICONS.INSTAGRAM}
            />
            <SimpleButton
              title={t("FOOTER.TWITTER-BUTTON-DATA")}
              icon={SVG_ICONS.TWITTER}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
