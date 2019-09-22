import React from "react";

function Button(props) {

  return (
    <button {...props} 
      className="btn"
      id="service-button"
      style={{
        fontWeight: "bold",
        border: "1px solid black",
        boxShadow: "5px 10px 8px #888888" }}>
      {props.children}
    </button>
  );

}

export default Button;