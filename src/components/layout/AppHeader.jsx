import React from "react";
import "../../styles/layout/AppHeader.css";
import AppSidebar from "./AppSidebar";
import TitleAndLogo from "./TitleAndLogo";
import SimpleButton from "../shared/SimpleButton";
import { useSidebar } from "../../hooks/useSidebar";
import { SVG_ICONS } from "../../helpers/svgIcons";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../shared/LanguageSelector";

const AppHeader = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
  const [t] = useTranslation("global");

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
        title={t("HEADER.OPEN-SIDEBAR-BUTTON-TITLE")}
        icon={SVG_ICONS.THREE_LINES}
        action={openSidebar}
      />
      <TitleAndLogo />
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item centered">
            <a href="#section-1">{t("HEADER.NAV-BUTTON-HOME")}</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-2">{t("HEADER.NAV-BUTTON-SERVICES")}</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-3">{t("HEADER.NAV-BUTTON-REVIEWS")}</a>
          </li>
          <li className="nav-item centered">
            <a href="#section-4">{t("HEADER.NAV-BUTTON-CONTACT")}</a>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
};

export default AppHeader;
