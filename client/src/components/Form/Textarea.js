import React from "react";

export function Textarea(props) {
  return (
    <div className="form-group" style={{ marginBottom: 30, width: "100%" }}>
      <label style={{ fontWeight: "bold", marginBottom: "1rem", color: "black", fontSize: "1.1rem" }}> {props.label}</label>
      <textarea style={{ border: "1px solid black", height: "150px", width: "100%", boxShadow: "5px 10px 8px #888888" }} className="form-control" {...props} />
      <small>{props.small}</small>
    </div>
  )
}