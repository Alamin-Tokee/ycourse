import React from "react";
import "./Contact.css";
import { ContactInfo } from "../../data";
import ContactImage from "../../images/contact.svg";

const Contact = () => {
  return (
    //<!--START CONTACT-->
    <section className="contact">
      <div className="container contact_container">
        <aside className="contact_aside">
          <div className="aside_image">
            <img src={ContactImage} />
          </div>
          <h2>Contact Us</h2>
          <p>{ContactInfo.desc}</p>
          <ul className="contact_details">
            <li>
              <i className="uil uil-phone-times"></i>
              <h5>{ContactInfo.phone}</h5>
            </li>
            <li>
              <i className="uil uil-envelope"></i>
              <h5>{ContactInfo.email}</h5>
            </li>
            <li>
              <i className="uil uil-location-point"></i>
              <h5>{ContactInfo.address}</h5>
            </li>
          </ul>
          <ul className="contact_socials">
            <li>
              <a href="#">
                <i className="uil uil-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </aside>

        <form className="contact_form">
          <div className="form_name">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="Email Address"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="Message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
