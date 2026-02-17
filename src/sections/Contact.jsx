import React from "react";
import "./contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div className="container contactContainer">
        
        <h2 className="contactTitle">
          Let's Build Something Amazing
        </h2>

        <p className="contactSubtitle">
          I'm always open to discussing new projects and opportunities
        </p>

        <div className="contactIcons">

          <a
            href="https://github.com/UMIDRR"
            target="_blank"
            rel="noopener noreferrer"
            className="contactIconBtn"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="http://linkedin.com/in/umid-rzazada-4a9563357"
            target="_blank"
            rel="noopener noreferrer"
            className="contactIconBtn"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

        

          <a
            href="mailto:umidrzayev52@gmail.com"
            className="contactIconBtn"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
