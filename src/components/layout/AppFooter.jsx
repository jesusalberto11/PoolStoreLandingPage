import React from "react";
import "../../styles/layout/AppFooter.css";
import SimpleButton from "../shared/SimpleButton";
import { SVG_ICONS } from "../../helpers/svgIcons";

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-left-side">
        <h3>SOBRE NOSOTROS</h3>
        <p>
          Somos lideres en la creación, reparación, remodelación y protección de
          piscinas en todo Colombia. Enclavados en el corazón del país, nos
          enorgullece ofrecer servicios innovadores que transformarán tu espacio
          acuático en un oasis de serenidad y diversión.
        </p>
      </div>
      <div className="contact-info">
        <div className="footer-center-side">
          <h3>INFORMACIÓN GENERAL</h3>
          <p>Conócenos</p>
          <p>Preguntas frecuentes</p>
          <p>Política de privacidad</p>
          <p>PQRS</p>
        </div>
        <div className="footer-right-side">
          <h3>CONTACTO</h3>
          <p>
            <strong>Teléfono Fijo:</strong> +57 4468996
          </p>
          <p>
            <strong>Móvil:</strong> +57 312 525 1219
          </p>
          <p>
            <strong>WhatsApp:</strong> +57 302 521 1319
          </p>
          <div className="footer-social-media-buttons-container">
            <SimpleButton
              title={"Botón de ir a nuestra pagina de Facebook"}
              icon={SVG_ICONS.FACEBOOK}
            />
            <SimpleButton
              title={"Botón de ir a nuestro chat de Whatsaap"}
              icon={SVG_ICONS.WHATSAAP}
            />
            <SimpleButton
              title={"Botón de ir a nuestra pagina de Instagram"}
              icon={SVG_ICONS.INSTAGRAM}
            />
            <SimpleButton
              title={"Botón de ir a nuestra pagina de Twitter"}
              icon={SVG_ICONS.TWITTER}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
