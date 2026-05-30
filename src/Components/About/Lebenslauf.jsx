import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// مصفوفة الخبرات المهنية والتعليم والشهادات
const resumeData = {
  experience: [
      {
      period: " 04.2026 - bis jetzt",
     title: "TEILNEHMER | KNOWLEDGE ACADEMY",
  subtitle: "Weiterbildung zum Mobile App Developer (Flutter & Dart)",
  details: "• Cross-Platform Mobile App Entwicklung mit Flutter & Dart \n• UI/UX Design für mobile Anwendungen \n• Integration von REST-APIs und Backend-Diensten \n• Entwicklung und Veröffentlichung praxisnaher App-Projekte",
   // achievement: "Abschluss: Zertifikat von Knowledge Academy"
    },
    {
      period: "03.2025 – 01.2026",
      title: "TEILNEHMER, & KNOWLEDGE ACADEMY",
      subtitle: "Weiterbildung Back-End developer zum Webanwendung",
      details: "• C# - OOP - ASP.Net core – Api - MVC - GraphQL \n• DataBase - SQL - Microsoft SQL Server - MySql - ORM - MongoDB \n• Node.js – Express.js -  Erfolgreicher Abschluss von Full-Stack E-Commerce- und Bildungsplattform-Projekten  ",
      achievement: "Abschluss: Zertifikat von Knowledge Academy"
    },
    {
      period: "05.2024 – 02.2025",
      title: "TEILNEHMER, & KNOWLEDGE ACADEMY",
      subtitle: "Weiterbildung Front-End developer zum Webanwendung",
      details: "• HTML – CSS – Bootstrap – Tailwind CSS – Material UI – React – Vue \n• JavaScript – TypeScript – Angular – Node.js – Express.js - • Erfolgreicher Abschluss von Full-Stack E-Commerce- und Kursplattform-Projekten ",
      achievement: "Abschluss: Zertifikat von Knowledge Academy"
    },
    {
      period: "08.2021 – 02.2024",
      title: "AUSZUBILDENDER, & JASTECH GMBH, MÜNSTER",
      subtitle: "Fachinformatiker Fachrichtung: Anwendungsentwicklung (Vollzeit)",
      details: "• PHP – Laravel – OOP – Pimcore – Wordpress – MVC – Docker \n• HTML – CSS – Bootstrap – Material UI – React – Vue",
      achievement: "Abschluss: Zertifikat von IHK Münster"
    },
    {
      period: "07.2020 – 05.2021",
      title: "TEILNEHMER, & KNOWLEDGE ACADEMY",
      subtitle: "Weiterbildung Back end developer zum Webanwendung",
      details: "Lerne neue Fähigkeiten in der Entwicklung und Gestaltung von Websites. \n• PHP – Laravel – OOP \n• HTML – CSS – Bootstrap – Material UI – React",
      achievement: "Abschluss: Zertifikat von Knowledge Academy"
    },
    {
      period: "10.2019 – 06.2020",
      title: "AKTIVE STELLENRECHERCHE",
      subtitle: "Fokus auf den Einstieg in den IT-Bereich",
      details: "",
      achievement: ""
    },
    {
      period: "07.2019 – 08.2019",
      title: "PRAKTIKUM, & REGENREICH GMBH, MÜNSTER",
      subtitle: "Informatiker und Webmaster in Vollzeit",
      details: "Entwicklung von Computer-Hard- und Software \n• WordPress – PHP – JavaScript \n• HTML – CSS – Bootstrap \n• Adobe Photoshop – Adobe Illustrator",
      achievement: "Abschluss: Zertifikat von Regenreich GmbH"
    },
    {
      period: "04.2019 – 07.2019",
      title: "TEILNEHMER, & HRC AKADEMIE GMBH, MÜNSTER",
      subtitle: "Weiterbildung zum Qualitätsmanagement-Assistenten",
      details: "• Grundlagen des Qualitätsmanagements \n• Methoden des Qualitätsmanagements für kontinuierliche Verbesserungsprozesse \n• Kreativitätstechniken & Kommunikationstraining \n• Biostrukturanalyse",
      achievement: "Abschluss: Zertifikat von HRC Akademie GmbH"
    },
    {
      period: "10.2018 – 04.2019",
      title: "AKTIVE STELLENRECHERCHE",
      subtitle: "",
      details: "",
      achievement: ""
    },
    {
      period: "01.2018 – 10.2018",
      title: "TEILNEHMER DEUTSCHSPRACHKURS, & BILDUNGSINSTITUT MÜNSTER E. V.",
      subtitle: "B2 Niveau von Telc",
      details: "",
      achievement: "Abschluss: Zertifikat von Telc"
    },
    {
      period: "06.2016 – 02.2019",
      title: "VORSTANDSVORSITZENDER UND MITBEGRÜNDER, MÜNSTER",
      subtitle: "Amal – das syrische Sozial- & Kulturforum e.V. Münster",
      details: "• Unterstützung und Beratung von Flüchtlingen \n• Organisation von kulturellen Veranstaltungen und Ausstellungen in Münster \n• Hilfe bei की Übersetzung von Formularen",
      achievement: "Betriebsbedingte Umstrukturierung"
    },
    {
      period: "01.2017 – 07.2017",
      title: "EHRENAMTLICHER LEHRER FÜR ARABISCH, & IDA KIRCHE, MÜNSTER",
      subtitle: "Lehrkraft für Arabisch als Fremdsprache",
      details: "",
      achievement: "Beendigung der Tätigkeit zur beruflichen Weiterentwicklung"
    },
    {
      period: "06.2016 – 05.2017",
      title: "TEILNEHMER DEUTSCHSPRACHKURS, & WERKSTATT FÜR BILDUNG UND KULTUR",
      subtitle: "B1 Niveau von Telc",
      details: "",
      achievement: "Abschluss: Zertifikat von Telc B1"
    },
    {
      period: "09.2015 – 04.2016",
      title: "LEHRER FÜR ARABISCH, & ISTANBUL (TÜRKEI)",
      subtitle: "Yasmin-Sham-Schule",
      details: "• Lehrkraft für Arabisch \n• Integration von Technologien in der Bildung \n• Vermittlung von Lern- und Kreativitätstechniken",
      achievement: "Beendigung aufgrund von Umzug nach Deutschland"
    },
    {
      period: "12.2014 – 07.2015",
      title: "LEHRER FÜR ARABISCH & DOZENT, & UNIVERSITÄT (MALAYSIA)",
      subtitle: "Imam-Razi-Institute, Kuala Lumpur",
      details: "• Dozent für Arabisch als Fremdsprache \n• Integration von Technologien in der Bildung \n• Vermittlung von Lern- und Kreativitätstechniken",
      achievement: "Beendigung aufgrund von Umzug in die Türkei"
    },
    {
      period: "10.2011 – 12.2014",
      title: "INFORMATIKER UND WEBMASTER & UNIVERSITÄT DAMASKUS (SYRIEN)",
      subtitle: "Rechtswissenschaftliche Fakultät (Vollzeit)",
      details: "• Gestaltung und Management der offiziellen Website der Fakultät \n• Entwicklung von Computer-Hard- und Software \n• Lehrer für Informatik (ICDL)",
      achievement: "Beendigung der Arbeit aufgrund des Syrien-Kriegs"
    }
  ],
  education: [
    {
      period: "08.2013 – 09.2014",
      title: "STUDENT & , HOCHSCHULINSTITUT FÜR VERWALTUNG, DAMASKUS",
      subtitle: "Spezialisierungsdiplom: Informatik-Management / Verwaltungsinformatik",
      details: "• Fachbereich EDV-Anwendung in der Verwaltung",
      achievement: "Abschluss: Diplom von Universität Damaskus (In Deutschland anerkannt)"
    },
    {
      period: "09.2010 – 09.2011",
      title: "TEILNEHMER, & WEITERBILDUNGSSTUDIENGANG, DAMASKUS",
      subtitle: "Integration von Technologien in der Bildung",
      details: "",
      achievement: "Abschluss: Zertifikat von Syrisches Bildungsministerium"
    },
    {
      period: "10.2007 – 09.2011",
      title: "STUDENT DER ISLAMWISSENSCHAFT, & UNIVERSITÄT DAMASKUS",
      subtitle: "",
      details: "",
      achievement: "Abschluss: Diplom von Universität Damaskus (In Deutschland anerkannt)"
    },
    {
      period: "09.2009 – 08.2010",
      title: "LEHRER FÜR ARABISCH, & DAMASKUS",
      subtitle: "Arabisch- und Religionslehrer an mehreren staatlichen Schulen",
      details: "",
      achievement: ""
    },
    {
      period: "09.1994 – 07.2006",
      title: "SCHÜLER, & MARUF ALARNOOT SCHULE, DAMASKUS",
      subtitle: "Allgemeine Schulbildung",
      details: "",
      achievement: "Abschluss entspricht der allgemeinen Hochschulreife"
    }
  ],
  languages: [
    { name: "Arabisch", level: "Muttersprache" },
    { name: "Deutsch", level: "B2 / C1" },
    { name: "Englisch", level: "B1" },
    { name: "Türkisch", level: "A1" }
  ],
  skills: [
    { name: "Computer Hardware und Software", level: "Expertenwissen" },
    { name: "MS Office", level: "Besitz der ICDL (International Computer Driving Licence)" }
  ]
};

const Lebenslauf = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
    });
  }, []);

  // التنسيقات الثابتة الأساسية للمظهر الذهبي الفاخر الداكن
  const styles = {
    section: {
      background: "radial-gradient(circle at center, #2c2d30 0%, #17181c 100%)",
      color: "#e0e0e0",
      padding: "80px 0",
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden"
    },
    mainTitle: {
      color: "#dfba6b",
      fontSize: "32px",
      fontWeight: "700",
      textShadow: "0 0 10px rgba(223, 186, 107, 0.3)",
      marginBottom: "35px"
    },
    categoryTitle: {
      color: "#dfba6b",
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "25px"
    }
  };

  return (
    <section style={styles.section} id="lebenslauf">
      {/* ستايل داخلي مخصص لتأثيرات الـ Hover المضيئة والممتازة */}
      <style>{`
        .custom-timeline-container {
          position: relative;
          border-left: 2px solid rgba(223, 186, 107, 0.4);
          padding-left: 30px;
          margin-left: 10px;
          transition: all 0.4s ease;
        }
        
        /* تأثير عند التأشير على الحاوية الكلية للخط الجانبي */
        .custom-timeline-container:hover {
          border-left-color: #dfba6b;
          box-shadow: -5px 0 20px -5px rgba(223, 186, 107, 0.6);
        }

        .custom-timeline-item {
          position: relative;
          margin-bottom: 45px;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          padding: 10px;
          border-radius: 8px;
          background: transparent;
        }

        /* حركات الـ Hover الفخمة لكل بند */
        .custom-timeline-item:hover {
          transform: translateY(-5px);
          background: rgba(223, 186, 107, 0.03);
        }

        .custom-timeline-dot {
          position: absolute;
          left: -41px;
          top: 15px;
          width: 20px;
          height: 20px;
          borderRadius: 50%;
          background: #17181c;
          border: 3px solid rgba(223, 186, 107, 0.6);
          box-shadow: 0 0 5px rgba(223, 186, 107, 0.3);
          transition: all 0.4s ease;
          z-index: 2;
        }

        .custom-timeline-item:hover .custom-timeline-dot {
          background: #dfba6b;
          border-color: #ffffff;
          box-shadow: 0 0 15px #dfba6b, 0 0 25px #dfba6b;
          transform: scale(1.2);
        }

        .custom-period-badge {
          display: inline-block;
          background: rgba(223, 186, 107, 0.15);
          color: #dfba6b;
          padding: 5px 15px;
          borderRadius: 4px;
          fontSize: 14px;
          fontWeight: 600;
          border: 1px solid rgba(223, 186, 107, 0.3);
          marginBottom: 12px;
          transition: all 0.4s ease;
        }

        .custom-timeline-item:hover .custom-period-badge {
          background: #dfba6b;
          color: #17181c;
          box-shadow: 0 0 15px rgba(223, 186, 107, 0.6);
          border-color: #ffffff;
        }

        .custom-item-title {
          color: #ffffff;
          fontSize: 18px;
          fontWeight: 700;
          letter-spacing: 0.5px;
          marginBottom: 8px;
          transition: all 0.3s ease;
        }
        
        .custom-timeline-item:hover .custom-item-title {
          color: #dfba6b;
          text-shadow: 0 0 8px rgba(223, 186, 107, 0.4);
        }

        .custom-item-subtitle {
          color: #b0b0b0;
          fontSize: 15px;
          font-style: italic;
          marginBottom: 10px;
        }

        .custom-item-details {
          color: #c8c8c8;
          fontSize: 14.5px;
          line-height: 1.6;
          white-space: pre-line;
          margin: 10px 0;
        }

        .custom-achievement {
          color: #dfba6b;
          fontWeight: 600;
          fontSize: 15px;
          marginTop: 8px;
          transition: all 0.3s ease;
        }
        
        .custom-timeline-item:hover .custom-achievement {
          color: #ffffff;
          text-shadow: 0 0 5px #dfba6b;
        }
      `}</style>

      <div className="container">
        
        {/* العناوين الرئيسية العليا */}
        <div className="personal__head text-center" data-aos="fade-up">
          <p style={{ color: "#dfba6b", fontSize: "36px", letterSpacing: "2px", textTransform: "uppercase" }}>Lebenslauf</p>
          <div style={{ width: '60px', height: '2px', background: '#dfba6b', margin: '10px auto 40px auto', boxShadow: "0 0 8px #dfba6b" }}></div>
        </div>

        <div className="row">
          
          {/* العمود الأول: Beruflicher Werdegang */}
          <div className="col-lg-6" data-aos="fade-up">
            <h3 style={styles.mainTitle}>Beruflicher Werdegang</h3>
            
            <div className="custom-timeline-container">
              {resumeData.experience.map((item, index) => (
                <div className="custom-timeline-item" key={index}>
                  {/* الدائرة المضيئة التفاعلية */}
                  <div className="custom-timeline-dot"></div>
                  
                  {/* تاريخ المدة */}
                  <div className="custom-period-badge">{item.period}</div>
                  
                  <div>
                    <h4 className="custom-item-title">{item.title}</h4>
                    {item.subtitle && <p className="custom-item-subtitle">{item.subtitle}</p>}
                    {item.details && <p className="custom-item-details">{item.details}</p>}
                    {item.achievement && (
                      <p className="custom-achievement">{item.achievement}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* العمود الثاني: Schulbildung والمهارات الأخرى */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            
            {/* قسم التعليم الشهادات الدراسية */}
            <h3 style={styles.mainTitle}>Schulbildung & Studium</h3>
            
            <div className="custom-timeline-container">
              {resumeData.education.map((item, index) => (
                <div className="custom-timeline-item" key={index}>
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-period-badge">{item.period}</div>
                  <div>
                    <h4 className="custom-item-title">{item.title}</h4>
                    {item.subtitle && <p className="custom-item-subtitle">{item.subtitle}</p>}
                    {item.details && <p className="custom-item-details">{item.details}</p>}
                    {item.achievement && (
                      <p className="custom-achievement">{item.achievement}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* قسم اللغات */}
            <h3 style={{...styles.categoryTitle, marginTop: "50px"}}>Sprachen</h3>
            <div className="custom-timeline-container">
              {resumeData.languages.map((lang, index) => (
                <div className="custom-timeline-item" key={index}>
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-period-badge">{lang.name}</div>
                  <div>
                    <p style={{ color: "#ffffff", fontSize: "16px" }}>{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* قسم الـ EDV-Kenntnisse */}
            <h3 style={{...styles.categoryTitle, marginTop: "50px"}}>EDV-Kenntnisse</h3>
            <div className="custom-timeline-container">
              {resumeData.skills.map((skill, index) => (
                <div className="custom-timeline-item" key={index}>
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-period-badge">{skill.name}</div>
                  <div>
                    <p style={{ color: "#ffffff", fontSize: "15px" }}>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* قسم الرخص والاهتمامات */}
            <h3 style={{...styles.categoryTitle, marginTop: "50px"}}>Führerschein & Hobbies</h3>
            <div className="custom-timeline-container">
              <div className="custom-timeline-item">
                <div className="custom-timeline-dot"></div>
                <div className="custom-period-badge">Führerschein</div>
                <div><p style={{ color: "#ffffff" }}>Klasse B</p></div>
              </div>
              <div className="custom-timeline-item">
                <div className="custom-timeline-dot"></div>
                <div className="custom-period-badge">Hobbies</div>
                <div>
                  <p style={{ color: "#ffffff", lineHeight: "1.6" }}>Fußball, Basketball, großes Interesse an I.T. und Grafikdesign</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Lebenslauf;