import React from "react";
import "../../styles/shared/SimpleButton.css";

const SimpleButton = ({
  id = "simple-button",
  title = "Default title",
  icon,
  action,
}) => {
  return (
    <button
      onClick={action}
      title={title}
      id={id}
      type="button"
      className="simple-button centered"
    >
      <svg width="22" height="22" fill="#FFF" viewBox="0 0 16 16">
        <path d={icon} />
      </svg>
    </button>
  );
};

export default SimpleButton;
