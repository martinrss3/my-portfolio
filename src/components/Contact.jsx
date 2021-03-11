import React from "react";
import "../css/contact.css";

export const Contact = () => {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
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
      <h1>Flat Responsive Form</h1>
      <div className="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
        <form
          action="/?page_id=143#wpcf7-f156-p143-o1"
          method="post"
          className="wpcf7-form"
          noValidate="novalidate"
        >
          <div style={{ display: "none" }}>
            <input type="hidden" name="_wpcf7" value="156" />
            <input type="hidden" name="_wpcf7_version" value="3.7.2" />
            <input type="hidden" name="_wpcf7_locale" value="en_US" />
            <input
              type="hidden"
              name="_wpcf7_unit_tag"
              value="wpcf7-f156-p143-o1"
            />
            <input type="hidden" name="_wpnonce" value="d1da331d93" />
          </div>
          <p>
            <span className="wpcf7-form-control-wrap Name">
              <input
                type="text"
                name="Name"
                value=""
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
                name="Email"
                size="40"
                className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email"
              />
            </span>
            <span className="wpcf7-form-control-wrap Message">
              <textarea
                name="Message"
                cols="40"
                rows="10"
                className="wpcf7-form-control wpcf7-textarea"
                aria-invalid="false"
                placeholder="Message"
              ></textarea>
            </span>
            <input
              type="submit"
              value="Send"
              className="wpcf7-form-control wpcf7-submit btn"
            />
            <img
              className="ajax-loader"
              src="http://www.jordancundiff.com/wp-content/plugins/contact-form-7/images/ajax-loader.gif"
              alt="Sending ..."
              style={{ visibility: "hidden" }}
            />
          </p>
          <div className="wpcf7-response-output wpcf7-display-none"></div>
        </form>
      </div>
    </div>
  );
};
