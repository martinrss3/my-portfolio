import React, { useState } from "react";
// import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + data.name + " " + data.email);
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_kfbsi8a",
  //       "contact_form",
  //       e.target,
  //       "user_PHtkeCOhwSgwz8CdXXAtv"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <div className="container contact">
      <div>
        <form
          action="/?page_id=143#wpcf7-f156-p143-o1"
          className="wpcf7-form"
          noValidate="novalidate"
          onSubmit={sendData}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              ></textarea>
            </span>
            <input
              type="submit"
              value="Send"
              className="wpcf7-form-control wpcf7-submit btn"
            />
            {/* <img
              className="ajax-loader"
              src="http://www.jordancundiff.com/wp-content/plugins/contact-form-7/images/ajax-loader.gif"
              alt="Sending ..."
              style={{ visibility: "hidden" }}
            /> */}
          </p>
          <div className="wpcf7-response-output wpcf7-display-none"></div>
        </form>
      </div>
    </div>
  );
};
