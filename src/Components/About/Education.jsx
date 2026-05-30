import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Education = ({ isTabActive }) => {
  const educationData = [
    {
      year: "2025–2026",
      title: "Weiterbildung zum Back-End Developer",
      desc: "Knowledge Academy | ASP.NET Core, C#, SQL, MongoDB, Node.js"
    },
    {
      year: "2024–2025",
      title: "Weiterbildung zum Front-End Developer",
      desc: "Knowledge Academy | React, Vue, Tailwind CSS, Bootstrap, Material UI"
    },
    {
      year: "2021–2024",
      title: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
      desc: "JaStech GmbH, Münster | IHK-Abschluss"
    },
    {
      year: "2020–2021",
      title: "Weiterbildung zum Webanwendungsentwickler",
      desc: "Knowledge Academy | PHP, Laravel, HTML, CSS, React"
    },
    {
      year: "2019",
      title: "Weiterbildung zum Qualitätsmanagement-Assistenten",
      desc: "HRC Akademie GmbH, Münster | Qualitätsmanagement und Kommunikation"
    },
    {
      year: "2018–2019",
      title: "Deutschsprachkurs B2",
      desc: "Bildungsinstitut Münster e. V., Münster"
    },
    {
      year: "2016–2017",
      title: "Deutschsprachkurs B1",
      desc: "Werkstatt für Bildung und Kultur, Münster"
    },
    {
      year: "2013–2014",
      title: "Spezialisierungsdiplom Informatik-Management",
      desc: "Hochschulinstitut für Verwaltung, Damaskus"
    },
    {
      year: "2010–2011",
      title: "Integration von Technologien in der Bildung",
      desc: "Weiterbildungsstudiengang | Abschluss: Zertifikat"
    },
    {
      year: "2007–2011",
      title: "Studium der Islamwissenschaft",
      desc: "Universität Damaskus | Abschluss: Diplom"
    },
    {
      year: "1994–2006",
      title: "Allgemeine Schulbildung",
      desc: "Maruf Alarnoot Schule, Damaskus"
    }
  ];

  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb education__thumb">
              <img src={personalInfothumb} alt="Hussam Alnabelsi" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about__onecontent education__content">
              <h2>My Education</h2>
              <p className="education__intro">
                Mein Bildungsweg verbindet akademische Qualifikation, berufliche Weiterbildung
                und sprachliche Entwicklung. Ich habe mich in den Bereichen Informatik,
                Webentwicklung und Bildungstechnologie kontinuierlich weiterentwickelt.
              </p>

              <div className="education__list mt-30">
                {educationData.map((item, index) => (
                  <div className="education__item" key={index}>
                    <div className="education__year">{item.year}</div>
                    <div className="education__body">
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

export default Education;