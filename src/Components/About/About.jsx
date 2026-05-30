import React, { useEffect, useState } from "react";
import sectionStar from "../../assets/img/about/section-star.png";

import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

import AOS from "aos";
import "aos/dist/aos.css";

// روابط مباشرة لأيقونات التقنيات لضمان مظهر احترافي مذهل
const techIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", alt: "ASP.NET Core" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" }
];

const tabList = [
  { id: 1, name: "About", value: "about" },
  { id: 2, name: "Experience", value: "experience" },
  { id: 3, name: "Education", value: "education" },
  { id: 4, name: "Skills", value: "skills" },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");
  
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          
          {/* التخطيط المطور والخلاب للجزء العلوي الشخصي */}
          <div className="personal__head-modern">
            
            {/* الجهة اليسرى: الصورة الشخصية بداخل حاوية احترافية */}
            <div className="personal__head-left" data-aos="fade-right" data-aos-duration="1200">
              <div className="profile-image-frame">
                <img
                  src={sectionStar} // *** ضع مسار صورتك المعدلة الجديدة هنا ***
                  alt="Hussam Alnabelsi"
                  className="profile-img-fluid"
                />
              </div>
            </div>
            
            {/* الجهة اليمنى: النجمة، النص الألماني، وأيقونات الـ Stack */}
            <div className="personal__head-right" data-aos="fade-left" data-aos-duration="1200">
              <img
                src={sectionStar}
                className="mb-20 star-icon-animated"
                alt="star"
              />
              <h2 className="profile-heading">Hussam Alnabelsi</h2>
              <p className="descrp-modern">
                "Ich bin Hussam Alnabelsi, zertifizierter Fachinformatiker und Full-Stack-Experte. 
                Mein Fokus liegt auf React, Angular sowie ASP.NET Core, PHP Laravel und Node.js. 
                Zudem entwickle ich leistungsstarke Mobile Apps mit Flutter und Dart, um komplexe 
                Anforderungen in erstklassige, skalierbare digitale Lösungen zu verwandeln."
              </p>
              
              {/* شريط التقنيات التفاعلي */}
              <div className="tech-badge-container">
                {techIcons.map((icon, index) => (
                  <div className="tech-badge-item" key={index} title={icon.alt}>
                    <img src={icon.src} alt={icon.alt} className="tech-badge-img" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* نظام الـ Tabs الأصلي الخاص بك دون تعديل في العمل البرمجي */}
          <div className="singletab">
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;