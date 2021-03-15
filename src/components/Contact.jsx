import React from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kfbsi8a",
        "contact_form",
        e.target,
        "user_PHtkeCOhwSgwz8CdXXAtv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for your message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="container contact">
      <div>
        <img className="main-image img-contact" alt="me" />
      </div>

      <div>
        <h2 className="title-contact">Feel free to contact me</h2>
        <form
          action="/?page_id=143#wpcf7-f156-p143-o1"
          className="wpcf7-form"
          noValidate="novalidate"
          onSubmit={sendEmail}
        >
          <p>
            <span className="wpcf7-form-control-wrap Name">
              <input
                type="text"
                name="from_name"
                size="40"
                className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Name"
              />
            </span>
            <span className="wpcf7-form-control-wrap Email">
              <input
                type="email"
                name="user_email"
                size="40"
                className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email"
              />
            </span>
            <span className="wpcf7-form-control-wrap Message">
              <textarea
                name="message"
                cols="40"
                rows="10"
                className="wpcf7-form-control wpcf7-textarea"
                aria-invalid="false"
                placeholder="Message"
              ></textarea>
            </span>
            <input type="submit" value="Send" className="send-btn" />
          </p>
          <div className="wpcf7-response-output wpcf7-display-none"></div>
        </form>
      </div>
    </div>
  );
};
