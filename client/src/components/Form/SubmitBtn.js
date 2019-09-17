import React from "react";

export function SubmitBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: "1rem", marginBottom: "5rem", backgroundColor: "rgb(239, 213, 27)", color: "black", fontWeight: "bold", border: "1px solid black", boxShadow: "5px 10px 8px #888888" }} className="btn">
      {props.children}
    </button>
  );
}