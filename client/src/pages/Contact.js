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
      <div className="container d-flex justify-content-center" id="contentContainer">
        <div className="row mt-4">
          <div className="col">
            <form method="post">
              <Input
                label="Email"
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
        </div>
      </div>
    )
  }
}

export default Contact;