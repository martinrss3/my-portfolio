import React from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="real-wrapper">
      <div className="container-form">
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <input type="text" name="field1" placeholder="Your Name" />
          <input type="email" name="field2" placeholder="Email Address" />
          <textarea name="field3" placeholder="Type your Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
