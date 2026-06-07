import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
  Whatsapp,
  Github
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const XingIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M11.222 0h3.284L9.034 9.186 16 16h-3.284L6.034 9.186 11.222 0zM4.778 3.32h3.284L5.27 8.16l2.792 4.52H4.778L1.986 8.16l2.792-4.84z"/>
  </svg>
);

const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
    link: "https://www.facebook.com/HussamAlnabelsi",
   
  },
  {
    id: 2,
    icon: <XingIcon color="#FFFFFF" size={20} />,
    link: "https://www.xing.com/profile/Hussam_ALNABELSI",
  },
  {
    id: 3,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/hussam-alnabelsi/",
  },
  {
    id: 4,
    icon: <Whatsapp />,
    link: "https://wa.me/4917646602477",
  },
  {
    id: 5,
    icon: <Instagram />,
    link: "https://www.instagram.com/hussamalnabelsi/",
  },
  {
     id: 6,
     icon: <Github />,
     link: "https://github.com/HussamFull", 
   },
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Willkommen auf der Website von
                </span>
                <span className="d-flex gap-4 align-items-center">
                  Hussam Alanbelsi
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone">Anwendungsentwickler</span>
                <span className="d-block designers" data-text="Softwareentwickler">
                  Softwareentwickler  
                </span>
              </h1>
              <div className="video__area">
               {/* <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position  ? "right_up_animat" : "right_up"
              }`}
             
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>(+049)-176-466-024-77</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id, link }) => {
              return (
                <li key={id}>
                  <Link to={link} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )}
    </section>
  );
};

export default Banner;
