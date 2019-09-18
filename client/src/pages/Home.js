import React, { Component } from "react";
import Button from "../components/Button";

class Home extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid" id="contentContainer">
          <div className="row">
            <div className="col-12 p-0" id="title-image">
              <img
                id="kcimg"
                style={{ width: "85vw" }}
                src="../../images/downtownkcdark.jpg"
                alt="Downtown KC" />
              <div id="center-brand">
                <img
                  id="logo-main"
                  style={{ width: "5rem", height: "5rem" }}
                  src="../../images/nclogo.png"
                  alt="Nicholson Capital Management" />
                <span id="name-main">Nicholson Capital Management</span>
                <div id="tagline-main">Investment Managers and Financial Consultants</div>
              </div>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col-1"></div>
            <div className="col-5 my-auto" id="info-block">
              <h1 id="info-header">Helping You Navigate Through Life</h1>
              <p id="info-text">Charting your course through life brings financial challenges at every turn. At Nicholson Capital Management (NCM), we have one mission: to help our clients, whether they are individuals, corporations or retirement plans, to evaluate and reach their financial goals.</p>
              <p id="info-text"> NCM, established in 1988, is an independent Registered Investment Advisory Firm (RIA) based in Kansas City, Missouri. Our active wealth management services and our consulting services will make your journey easier to navigate and place your goals within reach.</p>
              <p id="info-text">At Nicholson Capital Management, we are committed to our clients in all market environments, with the knowledge that having the right navigator makes all the difference.</p>
            </div>
            <div className="col-1"></div>
            <div className="col-4 mb-5">
              <Button>Wealth Management Services</Button>
              <Button>Retirement Plan Services</Button>
              <Button>Legacy Services & Financial Consulting</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;