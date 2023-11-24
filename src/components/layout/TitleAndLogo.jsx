import React from "react";
import "../../styles/layout/TitleAndLogo.css";

const TitleAndLogo = () => {
  return (
    <div className="title-logo-container">
      <img
        src="img/logo.png"
        className="logo"
        alt="Logo de AquaDiseño Piscinas"
        title="Logo de AquaDiseño Piscinas"
      />
      <p className="header-title centered">AquaDiseño Piscinas</p>
    </div>
  );
};

export default TitleAndLogo;
