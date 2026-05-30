import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
         Webentwicklungs-Fähigkeiten sind für jeden unverzichtbar, der interaktive und ansprechende Websites und Web-Anwendungen erstellen möchte. Diese Fähigkeiten umfassen eine breite Palette von Techniken und Sprachen, angefangen von den Grundlagen wie HTML, CSS und JavaScript bis hin zu fortgeschritteneren Sprachen wie Python, Java,Dart und PHP.
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> address </span>
              <span className="textp"> Petersdamm 05 , 48167 Münster </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link className="textp"> alnabelsi.hussam@gmail.com </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> call now </span>
              <Link className="textp"> +49 1764 660 2477 </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id }) => (
              <li key={id}>
                <Link>
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Lass uns reden </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
