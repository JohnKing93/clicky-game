import React from "react";
import "./style.css";

function Planet(props) {
  return (
    <div className="col-sm-4">
      <div className="spacing" onClick={() => props.handleOnClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Planet;
