import React, { Component } from "react";

class Contact extends Component {

  render() {
    
    return (
      <div className="contact-container" id="contact-me">

        <div className="contact-title">
          <h1>&lt;/ Contact Me /&gt;</h1>
        </div>

        <form className="contact-forms" action="https://getform.io/f/d00552f5-17c9-4233-865b-11783e0b28ff" method="POST">

          <div className="name-email">
            {/* name input */}
            <div className="name-box">
              <input type="text" name="name" required id="name" placeholder="Name (required)" />
            </div>

            {/* email input */}
            <div className="email-box">
              <input type="text" name="email" id="email" required placeholder="Email (required)" />
            </div>
          </div>

          {/* message input */}
          <div className="message-box">
            <textarea name="message" id="message" placeholder="Message (required)" rows="10"></textarea>
          </div>

          {/* submit button */}
          <button className="contact-me-button">Let's talk!</button>

        </form>
      </div>
    );
  }
};

export default Contact;
