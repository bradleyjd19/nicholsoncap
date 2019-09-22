import React, { Component } from "react";
import MemberCard from "../components/MemberCard";
import members from "../team.json";

class Firm extends Component {

  state = {
    members
  }

  render() {

    const cardStyle = {
      width: "40%",
      backgroundColor: "black",
      color: "white",
    }

    return(
      <div>

        {this.state.members.map(member => (
          <MemberCard
            style={cardStyle}
            id={member.id}
            key={member.id}
            image={member.image}
            name={member.name}
            title={member.title}
            role={member.role}
          />
          ))}
      </div>
    )
  }

}

export default Firm;