import React from "react";
import "../../styles/layout/AppSidebarButton.css";

const AppSidebarButton = ({
  to = "#section-1",
  action,
  title = "Default title",
}) => {
  return (
    <li className="sidebar-button-container">
      <a href={to} className="sidebar-button centered" onClick={action}>
        {title}
      </a>
    </li>
  );
};

export default AppSidebarButton;
