import React from "react";
import "../../styles/sections/FormSection.css";
import CommonSection from "./CommonSection";

const FormSection = () => {
  return (
    <CommonSection id={"section-4"}>
      <div className="contact-form">
        <div className="container">
          <div className="contact-form-inner">
            <div className="contact-form-content">
              <h2>Contactanos</h2>
              <form action="#" method="post">
                <input
                  required
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre*"
                  autoComplete="given-name"
                />
                <input
                  required
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email*"
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
                  placeholder="Cuerpo del mensaje*"
                  autoComplete="off"
                  className="form-text-area"
                  rows="5"
                  cols="50"
                ></textarea>
                <button
                  type="submit"
                  className="submit-form-button"
                  title="Enviar tu mensaje"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="form-img centered">
              <img
                src="img/pool-grid/pool-construction.jpeg"
                alt="Imagen de una piscina en construcción"
                title="Imagen de una piscina en construcción"
              />
              <p className="img-subtitle">
                Más que piscinas, son recuerdos, dejalo en nuestras manos y lo
                haremos realidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CommonSection>
  );
};

export default FormSection;
