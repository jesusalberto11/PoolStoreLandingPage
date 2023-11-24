import React from "react";
import "../../styles/layout/AppSidebar.css";
import SimpleButton from "../shared/SimpleButton";
import { SVG_ICONS } from "../../helpers/svgIcons";
import AppSidebarButton from "./AppSidebarButton";

const AppSidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar-active" : "sidebar"}>
      <div className="sidebar-header">
        <div className="sidebar-img-title">
          <img
            src="img/logo.png"
            className="logo"
            alt="Logo de AquaDiseño Piscinas"
            title="Logo de AquaDiseño Piscinas"
          />
          <p className="sidebar-header-title centered">AquaDiseño Piscinas</p>
        </div>
        <SimpleButton
          id="toggle-sidebar"
          title={"Cerrar sidebar"}
          icon={SVG_ICONS.CLOSE}
          action={closeSidebar}
        />
      </div>
      <div className="sidebar-items-container">
        <hr role="presentation" />
        <ul className="sidebar-items">
          <AppSidebarButton
            to="#section-1"
            title="Inicio"
            action={closeSidebar}
          />
          <AppSidebarButton
            to="#section-2"
            title="Servicios"
            action={closeSidebar}
          />
          <AppSidebarButton
            to="#section-3"
            title="Testimonios"
            action={closeSidebar}
          />
          <AppSidebarButton
            to="#section-4"
            title="Contacto"
            action={closeSidebar}
          />
        </ul>
        <hr role="presentation" />
      </div>
    </aside>
  );
};

export default AppSidebar;
