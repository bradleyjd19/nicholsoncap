import React from "react";

function Button(props) {

  return (
    <button {...props} 
      className="btn"
      style={{ 
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "2rem",
        width: "100%",
        backgroundColor: "rgb(239, 213, 27)",
        color: "black",
        fontSize: "1.3rem",
        fontWeight: "bold",
        border: "1px solid black",
        boxShadow: "5px 10px 8px #888888" }}>
      {props.children}
    </button>
  );

}

export default Button;