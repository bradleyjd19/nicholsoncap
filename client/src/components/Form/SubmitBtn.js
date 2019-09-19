import React from "react";

export function SubmitBtn(props) {
  return (
    <button {...props} style={{ float: "right", margin: "1rem 0 5rem 0", backgroundColor: "rgb(239, 213, 27)", color: "black", fontWeight: "bold", border: "1px solid black", boxShadow: "5px 10px 8px #888888" }} className="btn">
      {props.children}
    </button>
  );
}