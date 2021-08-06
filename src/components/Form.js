import React, { useState } from "react";
import emailjs from "emailjs-com";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name && message && email.includes("@")) {
      emailjs
        .sendForm(
          "service_iy7pha2",
          "template_udgyfvs",
          e.target,
          "user_KRjJUBZfVcH2XWuxUkXIl"
        )
        .then(
          () => {
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <form className="form" onSubmit={sendEmail}>
      <h2 className="form-title">Contact Form</h2>
      <div className="form-fields">
        <div className="form-field">
          <p className="field-title">Name</p>
          <input
            type="text"
            className="field-input"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <p className="field-title">Email</p>
          <input
            type="text"
            className="field-input"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <p className="field-title">Message</p>
          <textarea
            className="field-text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Send" className="form-submit" />
      </div>
    </form>
  );
}

export default Form;
