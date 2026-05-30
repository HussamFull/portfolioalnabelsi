import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Experience = ({ isTabActive }) => {
  const experiences = [
    {
      year: "2025–2026",
      title: "Back-End Developer",
      desc: "Knowledge Academy | ASP.NET Core, C#, SQL, MongoDB, Node.js"
    },
    {
      year: "2024–2025",
      title: "Front-End Developer",
      desc: "Knowledge Academy | React, Vue, Tailwind CSS, Bootstrap, Material UI"
    },
    {
      year: "2021–2024",
      title: "Fachinformatiker für Anwendungsentwicklung",
      desc: "JaStech GmbH, Münster | Informatiker und Webmaster"
    },
    {
      year: "2020–2021",
      title: "Webanwendungsentwickler",
      desc: "Knowledge Academy | PHP, Laravel, HTML, CSS, React"
    },
    {
      year: "2019",
      title: "Web Developer",
      desc: "Regenreich GmbH, Münster | WordPress, PHP, HTML, CSS, JavaScript"
    },
    {
      year: "2014–2016",
      title: "Lehrer für Arabisch und islamische Religionslehre",
      desc: "Imam-Razi Institute, Kuala Lumpur & Yasmin-Sham-Schule, Istanbul"
    },
    {
      year: "2011–2014",
      title: "Informatiker und Webmaster",
      desc: "Universität Damaskus | IT, Website-Management, Lehrer für Informatik ICDL"
    }
  ];

  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb experience__thumb">
              <img src={personalInfothumb} alt="Hussam Alnabelsi" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about__onecontent experience__content">
              <h2>My Experience</h2>
              <p className="experience__intro">
                Als erfahrener Entwickler verbinde ich Technik, Design und pädagogische Kompetenz
                zu praxisnahen digitalen Lösungen. Meine berufliche Laufbahn steht für
                kontinuierliches Wachstum in den Bereichen Webentwicklung, IT und Bildung.
              </p>

              <div className="experience__list mt-30">
                {experiences.map((item, index) => (
                  <div className="experience__item" key={index}>
                    <div className="experience__year">{item.year}</div>
                    <div className="experience__body">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;