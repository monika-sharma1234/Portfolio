import React from "react";
import { Link } from "react-scroll";

import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Monika Sharma",
    text: " Full Stack Developer Web Developer",
  });
  return (
    <header className="header home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
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
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a
                    href="https://drive.google.com/file/d/1jHvyIdCCIg9aI3SanjK6EyV0BgIStNpi/view?usp=share_link"
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Get Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <Link spy={true} smooth={true} duration={500} to={"about"}>
                    <a href="" className="btn btn-smart">
                      {/* <FaPlay className="play" /> */}
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
