import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";



const socialList = [
  {
    id: 1,
    platform: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/HussamAlnabelsi",
  },
  {
    id: 2,
    platform: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/hussamalnabelsi/",
  },
  {
    id: 3,
    platform: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/4917646602477",
  },
  {
    id: 4,
    platform: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/hussam-alnabelsi/",
  },
  {
    id: 5,
    platform: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/HussamFull/",
  },
  {
    id: 6,
    platform: "Xing",
    icon: <FaArrowRight />,
    link: "https://www.xing.com/profile/Hussam_ALNABELSI",
  }
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I’m Hussam Alnabelsi , Website & User Interface Designer
                  based in Münster.
                  
                </p>
<p className="email-text">
  <a href="mailto:alnabelsi.hussam@gmail.com" className="email-link">
    alnabelsi.hussam@gmail.com
  </a>
</p> 



              <div className="col-lg-12">
  <button
    type="button"
    onClick={() => (window.location.href = "mailto:alnabelsi.hussam@gmail.com")}
    className="d-flex fw-500 cmn--btn align-items-center gap-2"
  >
    <span className="get__text">Email</span>
    <span>
      <i className="fz-20">
        <ArrowRight />
      </i>
    </span>
  </button>
</div>











              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socialList.map(({ id, icon, platform, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={link} className="social__footer" target="_blank" rel="noopener noreferrer">
                          {platform && <span className="me-2">{platform}</span>}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2026 {" "}
              <Link to={"/"} className="base">
                Alnabelsi.Hussam
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
            </ul>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
