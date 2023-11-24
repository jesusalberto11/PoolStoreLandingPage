import React from "react";
import "../../styles/sections/MainSection.css";
import { useBackgroundImage } from "../../hooks/useBackgroundImage";

const MainSection = () => {
  const { currentBackgroundImage } = useBackgroundImage();

  return (
    <section id="section-1" className="section-container">
      <div
        className="main-section"
        style={{ backgroundImage: `url(${currentBackgroundImage})` }}
      >
        <div className="main-section-left-side">
          <h1 className="header-m1">
            Más de 10 años en calidad y experiencia en piscinas
          </h1>
          <p>
            Nos encargamos de construir la piscina de tus sueños en 60 días o
            menos
          </p>
          <a
            type="button"
            className="contact-button"
            title="Botón de ir a solicitar cotización gratuita"
            href="#section-4"
          >
            Solicita tu cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
