import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const awardList = [
  {
    id: 1,
    awardName: "Weiterbildung zum Back-End Developer",
    contest: "Knowledge Academy | ASP.NET Core, C#, SQL, MongoDB, Node.js",
    year: "2025–2026",
    certificateImg: "/assets/img/certificates/backendasp.jpg", // ضع مسار صورتك هنا
  },
  {
    id: 2,
    awardName: "Weiterbildung zum Front-End Developer",
    contest: "Knowledge Academy | React, Vue, Tailwind CSS, Bootstrap, Material UI ,  HTML – CSS – JavaScript – TypeScript – Angular ",
    year: "2024–2025",
    certificateImg: "/assets/img/certificates/frontreact.jpg",
  },
  {
    id: 3,
    awardName: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
    contest: "JaStech GmbH, Münster | IHK-Abschluss",
    year: "2021–2024",
    certificateImg: "/assets/img/certificates/ihk.jpg",
  },
  {
    id: 4,
    awardName: "Weiterbildung zum Webanwendungsentwickler",
    contest: "Knowledge Academy | PHP, Laravel, HTML, CSS, React",
    year: "2020–2021",
    certificateImg: "/assets/img/certificates/php-dev.jpeg",
  },
  {
    id: 5,
    awardName: "Weiterbildung zum Qualitätsmanagement-Assistenten",
    contest: "HRC Akademie GmbH, Münster | Qualitätsmanagement und Kommunikation",
    year: "2019",
    certificateImg: "/assets/img/certificates/qm.jpg",
  },
  {
    id: 6,
    awardName: "Deutschsprachkurs B2",
    contest: "Bildungsinstitut Münster e. V., Münster",
    year: "2018–2019",
    certificateImg: "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview",
  },
  {
    id: 7,
    awardName: "Deutschsprachkurs B1",
    contest: "Werkstatt für Bildung und Kultur, Münster",
    year: "2016–2017",
    certificateImg: "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview",
  },
  {
    id: 8,
    awardName: "Spezialisierungsdiplom Informatik-Management",
    contest: "Hochschulinstitut für Verwaltung, Damaskus",
    year: "2013–2014",
    certificateImg: "/assets/img/certificates/managementit.jpg",
  },
  {
    id: 9,
    awardName: "Integration von Technologien in der Bildung",
    contest: "Weiterbildungsstudiengang | Abschluss: Zertifikat",
    year: "2010–2011",
    certificateImg: "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview",
  },
  {
    id: 10,
    awardName: "Studium der Islamwissenschaft",
    contest: "Universität Damaskus | Abschluss: Diplom",
    year: "2007–2011",
    certificateImg: "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview",
  },
  {
    id: 11,
    awardName: "Allgemeine Schulbildung",
    contest: "Maruf Alarnoot Schule, Damaskus",
    year: "1994–2006",
    certificateImg: "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview",
  },
];

const Awards = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
    });
  }, []);

  // دالة لإغلاق النافذة عند الضغط على الخلفية السوداء الخارجيّة
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("certificate-modal-overlay")) {
      setSelectedCertificate(null);
    }
  };

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <div className="awards-wrapper" data-aos="fade-up">
          <div className="awards-header">
            <h2 className="awards-title">Education & Qualifications</h2>
            <a href="#portfolio" className="awards-link">
              <span>View My Work</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="awards-table">
            {awardList.map((award) => (
              <div 
                className="awards-row" 
                key={award.id}
                onClick={() => setSelectedCertificate(award)}
                style={{ cursor: "pointer" }}
                title="Click to view certificate"
              >
                <div className="awards-col awards-name">
                  <h3>{award.awardName}</h3>
                </div>
                <div className="awards-col awards-org">
                  <p>{award.contest}</p>
                </div>
                <div className="awards-col awards-year">
                  <span>{award.year}</span>
                  <i className="bi bi-eye modal-row-icon"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* النافذة المنبثقة الفاخرة لعرض الشهادة */}
      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={handleOverlayClick}>
          <div className="certificate-modal-content" data-aos="zoom-in" data-aos-duration="400">
            <button className="certificate-modal-close" onClick={() => setSelectedCertificate(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="certificate-modal-header">
              <h3>{selectedCertificate.awardName}</h3>
              <p>{selectedCertificate.contest}</p>
            </div>
            <div className="certificate-modal-body">
              <img 
                src={selectedCertificate.certificateImg} 
                alt={selectedCertificate.awardName} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x560/121212/d4af37?text=Certificate+Preview"; // صورة مؤقتة احترافية بحال عدم توفر الملف
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;