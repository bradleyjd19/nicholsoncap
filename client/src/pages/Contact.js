import React, { Component } from "react";
import { Input, Textarea, SubmitBtn } from "../components/Form";
import API from "../utils/API";

class Contact extends Component {

  state = {
    from: "",
    subject: "",
    text: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.from && this.state.text) {
      API.sendEmail(
        this.state.from,
        this.state.subject,
        this.state.text
      )
        .then(
          this.setState({
            from: "",
            subject: "",
            text: ""
          })
        )
      alert("Email Sent")
    } else {
      alert("Please fill both From and Subject fields");
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid" id="contentContainer">
          <div className="row w-100 d-flex justify-content-center m-0">
            <div className="col-9 text-center">
              <div id="contact-header">
                Let Nicholson Capital Management help you achieve your long-term financial goals. Call or send a message today.
            </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center pt-5" id="contact-content" style={{ backgroundImage: "url('../../images/kcmapgray.png", backgroundSize: "cover"}}>
          <div className="row w-100">
            <div className="col-1"></div>
            <div className="col-lg-4" id="contact-info">
              <div id="contact-address"><i className="fas fa-map-marker-alt mr-2"></i>4600 Madison Avenue, Suite 150</div>
              <div id="contact-city" className="ml-4">Kansas City, MO 64112</div>
              <div id="contact-number"><i className="fas fa-mobile-alt mr-3"></i>(816) 931-5757</div>
              <div id="contact-fax"><i className="fas fa-fax mr-2"></i>(816) 531-0418</div>
              <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.7174384632694!2d-94.59986288478619!3d39.044561479548264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0efc992ac2245%3A0x68bd87559cb7b0fa!2s4600%20Madison%20Ave%2C%20Kansas%20City%2C%20MO%2064112!5e0!3m2!1sen!2sus!4v1568748213905!5m2!1sen!2sus" title="map-tile" width="80%" height="290" frameBorder="0" style={{ border: "2px solid black" }} allowFullScreen=""></iframe></div>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-5">
              <form method="post">
                <Input
                  label="Email Address"
                  value={this.state.from}
                  onChange={this.handleInputChange}
                  name="from"
                />
                <Input
                  label="Subject"
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                  name="subject"
                />
                <Textarea
                  label="Message"
                  value={this.state.text}
                  onChange={this.handleInputChange}
                  name="text"
                  wrap="hard"
                />
                <SubmitBtn
                  onClick={this.handleFormSubmit}>
                  Send Message
                </SubmitBtn>
              </form>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;