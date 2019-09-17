import React from "react";
import "./style.css";

function Footer() {

  return (
    <footer className="page-footer font-small">
      <div className="container d-flex justify-content-center" id="container-footer">
        <div className="row" id="row-footer">
          <div className="col text-center my-auto mx-auto" id="footer-links">
            <div id="address"><i className="fas fa-map-marker-alt mr-2"></i>4600 Madison Avenue, Suite 150 {'\u00A0'} Kansas City, MO {'\u00A0'} 64112</div>
            <div id="address"><i className="fas fa-mobile-alt mr-2"></i>816-931-5757<i className="fas fa-fax ml-4 mr-2"></i>816-531-0418</div>
            <div id="address"></div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;