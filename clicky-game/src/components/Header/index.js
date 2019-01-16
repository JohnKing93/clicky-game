import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header(props) {
  return (
      <div className="header">
        <h1>Deep Space Clicky Game</h1>
        <p>Game Score: {props.gameScore} | Top Score: {props.topScore}</p>
      </div>
  );
}

export default Header;
