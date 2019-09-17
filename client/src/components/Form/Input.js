import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{ marginBottom: "2rem" }}>
      <label style={{ fontWeight: "bold", marginBottom: "1rem", color: "black", fontSize: "1.1rem" }}> {props.label}</label>
      <input style={{ border: "1px solid black", width: "100%", boxShadow: "5px 10px 8px #888888" }} className="form-control" {...props} />
      <small>{props.small}</small>
    </div>
  );
}