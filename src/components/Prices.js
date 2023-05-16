import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "My Projects",
    text: "These all the projects are developed using such technology..",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: "https://www.thecommerceshop.com/wp-content/uploads/2018/06/four-highly-profitable-digital-marketing-strategies-for-your-ecommerce-store.gif",
      heading: "Ecommerce-Website",
      desc: "E-commerce ( electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet",
      tech: "HTML , CSS , Advance JS ",
      deploy: " https://monika-sharma1234.github.io/Ecommerce-Website/",
      github: "https://github.com/monika-sharma1234/Ecommerce-Website",
    },
    {
      id: 2,
      poster:
        "https://media3.giphy.com/media/gKxuqkBRgWgVBgI57K/giphy.gif?cid=ecf05e4779hiuy4ybi2xzb5rcrb0mmp2b73aexeuwv0pcj9p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      heading: "Job Board Website",
      desc: "job board is a website employers use to promote job vacancies. Job seekers use them to find opportunities in their preferred field and location.",
      tech: "HTML,CSS,  JS, Firebase ",
      deploy: "https://monika-sharma1234.github.io/Job-Board-website.github.io/",
      github: "https://github.com/monika-sharma1234/Job-Board-website.github.io",
    },
    {
      id: 3,
      poster: "https://media.tenor.com/cDmgbzNwJpoAAAAM/social-media.gif",
      heading: "Socialbook Website",
      desc: " SocialBook connects all your different social media platforms whether that be YouTube, Instagram, or TikTok, and you can see how each one of your platforms is performing.",
      tech: "HTML,CSS,ADVANCE JS ",
      deploy: "https://monika-sharma1234.github.io/Monika-Sharma-socialbook-website.github.io/",
      github: "https://github.com/monika-sharma1234/Monika-Sharma-socialbook-website.github.io",
    },
    {
      id: 4,
      poster: "https://media.tenor.com/VYnja0QsMkwAAAAS/do-you-want-to-chat-wanna-chat.gif",
      heading: "Chat-App",
      desc: "Chat is an intelligent and secure communication and collaboration tool, built for teams ",
      tech: "HTML,CSS,ADVANCE JS , React js",
      deploy: " https://monika-sharma1234.github.io/Chat-App/",
      github: "https://github.com/monika-sharma1234/Chat-App",
    },
    {
      id: 5,
      poster: "https://media0.giphy.com/media/f3jI8v6tdAcnWnklCv/200w.webp?cid=ecf05e47me5zabco1clh31cx5adudvy9rpw9p3hsoig1kfmq&ep=v1_stickers_search&rid=200w.webp&ct=s",
      heading: "GLA-Academic Website",
      desc: "GLA  offers the best undergraduate, postgraduate and doctoral courses for students. We have anti-ragging committee, Grievance Redressal Mechanism & Proctorial Board for students. ",
      tech: "HTML,CSS,ADVANCE JS",
      deploy: "https://monika-sharma1234.github.io/GLA-ACADEMIC-Website.github.io/",
      github: "https://github.com/monika-sharma1234/GLA-ACADEMIC-Website.github.io",
    },
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="15px" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
