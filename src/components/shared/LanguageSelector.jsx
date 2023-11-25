import React from "react";
import "../../styles/shared/LanguageSelector.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="language-selector-container">
      <div className="language-selector-item">
        <img src="es.svg" className="language-img" />
        <button
          className="language-selector-button"
          disabled={i18n.language === "es"}
          onClick={() => i18n.changeLanguage("es")}
        >
          ES
        </button>
      </div>
      <div className="language-selector-item">
        <img src="en.svg" className="language-img" />
        <button
          className="language-selector-button"
          disabled={i18n.language === "en"}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
