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
            alt={props.firstName + " " + props.lastName}
            style={{
              width: "100%",
            }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "1.2rem" }}>
              {props.firstName + " " + props.lastName}
            </Card.Title>
            <Card.Text>
              {props.title}
              {/* {props.role} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default MemberCard;