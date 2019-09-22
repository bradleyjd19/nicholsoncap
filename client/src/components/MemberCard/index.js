import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function MemberCard(props) {
  return (
    <div>
      <div className="container" id="contentContainer">
        <Card style={props.style}>
          <Card.Img
            variant="top"
            src={props.image}
            alt={props.name}
            style={{
              height: "15rem",
              width: "12rem"
            }}
          />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.title}<br />
              {props.role}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default MemberCard;