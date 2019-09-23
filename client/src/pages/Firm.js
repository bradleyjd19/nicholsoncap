import React, { Component } from "react";
import MemberCard from "../components/MemberCard";
import members from "../team.json";

class Firm extends Component {

  state = {
    members
  }

  render() {

    // const cardStyle = {
    //   width: "40%",
    //   backgroundColor: "black",
    //   color: "white"
    // }

    return (
      <div>
        <div className="container-fluid mb-5" id="contentContainer">
          <div className="row w-100 d-flex justify-content-center m-0">
            <div className="col-9 text-center">
              <div id="firm-header">Our Firm </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8" id="firm-block">
              <h4 id="firm-info">Welcome to Nicholson Capital Management</h4>
              <p id="firm-info">Since 1988, our Company has had one specific goal. We help investors navigate through the complex issues surrounding their financial circumstances to reach their financial goals. By retaining the most qualified professionals in our field and by utilizing the most up-to-date technology available, we guide clients, including individuals, corporations and retirement plan sponsors, to a better awareness of the risks and rewards of the securities markets.</p>
              <p id="firm-info">Our Wealth Management Division assists clients in navigating the financial markets to achieve a rate of return consistent with their risk tolerance.</p>
              <p id="firm-info">Our services to Retirement Plan Sponsors help companies provide a framework by which their employees can be confident that their retirement plan will meet their long-term needs.</p>
              <p id="firm-info">Through our Legacy Services, we assist surviving spouses and children who might struggle through the maze of issues required to be handled after the loss of their loved one.</p>
              <p id="firm-info">NCM helps individuals, through our Financial Consulting Services, plan for their retirement, college educations for their children and grandchildren and estate planning for their peace of mind.</p>
              <p id="firm-info">Our Institutional Consulting Services provide valuable insight into ways to improve corporate, and non-profit Investment Guidelines statements to assist financial executives develop strategies to reach their organizational goals. We also aid in coordinating the selection and evaluation of multiple investment managers.</p>
              <p id="firm-info">We invite you to meet the team of incredible people at NCM who are eager to help you set the course forward.</p>
              <h4 id="firm-sig">Jennifer D. Nicholson, President</h4>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center align-self-center">
              <img
                className="img-fluid"
                id="team-pic"
                src="./images/NCMteam.jpg"
                alt="Our Team" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row w-100 d-flex justify-content-center m-0">
            <div className="col-9 text-center">
              <div id="team-header">Our Team</div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="team-container">
          <div className="row d-flex justify-content-center">
            {this.state.members.map(member => (
              <MemberCard
                style={{
                  width: "15vw",
                  backgroundColor: "black",
                  color: "white",
                  float: "left"
                }}
                id={member.id}
                key={member.id}
                image={member.image}
                firstName={member.firstName}
                lastName={member.lastName}
                title={member.title}
                role={member.role}
              />
            ))
            }
          </div>
        </div>
      </div>
    )
  }

}

export default Firm;