import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zl7te1h",
        "template_oeivq8p",
        form.current,
        "sWEP46cF27ED3ybZ-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="form-section" id="contact">
      <h1 className="form-header-text">Contact me</h1>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="Message" />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            className="form-input message"
          />
        </div>
        <div className="form-submit">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
