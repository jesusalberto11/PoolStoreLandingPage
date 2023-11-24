import React from "react";
import "../../styles/layout/AppHeader.css";
import AppSidebar from "./AppSidebar";
import TitleAndLogo from "./TitleAndLogo";
import SimpleButton from "../shared/SimpleButton";
import { useSidebar } from "../../hooks/useSidebar";
import { SVG_ICONS } from "../../helpers/svgIcons";

const AppHeader = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <header className="header">
      <AppSidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div
        className={
          isSidebarOpen ? "close-zone active-close-zone" : "close-zone"
        }
        role="presentation"
        onClick={closeSidebar}
      ></div>
      <SimpleButton
        id="toggle-sidebar"
        title={"Abrir menú de navegación"}
        icon={SVG_ICONS.THREE_LINES}
        action={openSidebar}
      />
      <TitleAndLogo />
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item centered">
            <a href="#section-1">Inicio</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-2">Servicios</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-3">Testimonios</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-4">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
