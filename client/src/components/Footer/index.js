import React from "react";
import "./style.css";

function Footer() {

  return (
    <footer className="page-footer font-small">
      <div className="container d-flex justify-content-center" id="container-footer">
        <div className="row" id="row-footer">
          <div className="column text-center my-auto" id="footer-links">
            <div id="address">Nicholson Capital Management</div>
            <div id="address">4600 Madison Avenue, Suite 150</div>
            <div id="address">Kansas City, MO  64112</div>
            <div id="address">Phone: 816-931-5757</div>
            <div id="address">Fax: 816-531-0418</div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;