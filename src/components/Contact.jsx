import React from "react";

const Contact = () => {
  return (
    <div className="contact-container" id="contact-me">

      <div className="contact-title">
        <h1>&lt;/ Contact Me /&gt;</h1>
      </div>

      <div className="contact-forms">
        <form action="https://getform.io/f/049645f9-8dd3-4ead-a466-2039520ded71" method="POST">
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
          <button className="contact-me-button">Let's talk!</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
