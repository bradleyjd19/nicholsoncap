import React, { Component } from "react";

class Wealth extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid" id="contentContainer">
          <div className="row">
            <div className="col-lg-6">
              <h1 id="info-header">Wealth Management Services</h1>
              <p id="info-text">NCM strives to help you respond to the uncertainty of the financial markets by continually monitoring economic and political dynamics that affect the performance of your investment portfolios.</p>
              <p id="info-text">We believe that asset allocation is the prime determinant of investment performance and that strategic navigational shifts among asset classes in response to various market dynamics can enhance returns.</p>
              <p id="info-text">We sit side-by-side with you in working toward your financial goals, making our relationship transformational, not transactional.</p>
              <p id="info-text">Each client account is managed as an individually tailored balanced account.</p>
              <ul>
                <li>Portfolios are invested in an allocation to various asset classes including bonds, stocks and money reserves.</li>
                <li>We invest in exchange traded funds and no-load mutual funds as well as individual securities, diversified by manager, style, and capitalization.</li>
                <li>Each client portfolio is individually tailored to reflect the client’s risk tolerance. We realize all investors are different and your ongoing thoughts on risk are important to us.</li>
                <li>We do not sell products. We provide our investment expertise through an annual fee arrangement in the day-to-day management of your portfolio.</li>
                <li>We meet with each client regularly, consulting with you about any changes in your life and financial goals.</li>
                <li>We provide comprehensive reports and market analysis to clients including strategy notes, “Know What You Own” education pieces and newsletters.</li>
                <li>All clients receive monthly statements and internet access to their accounts through their independent custodian.</li>
              </ul>
              <p id="info-text">We manage portfolios for individuals, trusts, retirement accounts, and institutional accounts that hold at least $400,000 in assets. We charge a percentage management fee based on the market value of account assets. If the market declines, our fee will be less, and as your portfolio rises, our fee will rise.</p>
              <p id="info-text">Responsiveness to your needs is all important to us and we are just a phone call or email away.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wealth;