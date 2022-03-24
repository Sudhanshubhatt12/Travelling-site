import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ys4cn5l",
      "template_qbjgcpb",
      form.current,
      "4Umd9qRDfz9bYUxsl"
    );
    e.target.reset();
  };
  return (
    <>
      <section className="contactsec">
        <h1>Fill Your Details</h1>
        <div className="maincont">
          <div className="contact">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
              <input
                type="number"
                name="mobileNo"
                placeholder="Enter your Number"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Message Here About Your Destination And Plan"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
