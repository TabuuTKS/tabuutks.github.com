import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './Contact.css'

export function Contact() {
  return (
    <section className="contact-section container mb-1" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 text-center" style={{ color: "#00ffff" }}>
        Contact
      </h2>

      <p className="text-center" style={{ color: "#aaaaaa" }}>
        Feel free to reach out via email or connect with me on social media.
      </p>

      <div className="d-flex flex-column align-items-center mt-4">
        {/* Email */}
        <p style={{ color: "#f5f5f5" }}>
          📧 Email:{" "}
          <a
            href="mailto:maanas22604@gmail.com"
            style={{ color: "#00ffff", textDecoration: "none" }}
          >
            maanas22604@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <a
            href="https://github.com/TabuuTKS"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon m-3"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/maanas-menghani-5161b02a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon m-3"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}