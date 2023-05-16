import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                I am interested in working with any company that thinks my skill
                will be helpful for them. If you are looking for someone like
                me, please let me know.
              </p>
              <ul className="contactCircles">
                <a
                  href="https://www.linkedin.com/in/monika-sharma-a69190219"
                  target="_blank"
                >
                  <li>
                    <FaLinkedin className="contactIcon" />
                  </li>
                </a>
                <a href="https://github.com/monika-sharma1234" target="_blank">
                  <li>
                    <FaGithub className="contactIcon" />
                  </li>
                </a>
                <a href="https://instagram.com/monika_sharma0803" target="_blank">
                  <li>
                    <FaInstagram className="contactIcon" />
                  </li>
                </a>

                <a href="https://leetcode.com/Monika_Sharma/" target="_blank">
                  <li>
                    <SiLeetcode className="contactIcon" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
