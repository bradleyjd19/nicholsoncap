import React from "react";
import "./style.css";

function Footer() {

  return (
    <footer className="page-footer font-small">
      <div className="container" id="container-footer">
        <div className="row" id="row-footer">
          <div className="column my-auto" id="footer-links">
            <div id="address"><i className="fas fa-map-marker-alt ml-1 mr-2"></i>4600 Madison Avenue, Suite 150</div>
            <div id="address" className="ml-4">Kansas City, MO {'\u00A0'} 64112</div>
            <div id="address"><i className="fas fa-mobile-alt ml-1 mr-2"></i>816-931-5757</div>
            <div id="address"><i className="fas fa-fax mr-2"></i>816-531-0418</div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;