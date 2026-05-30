import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";
import word from "../../assets/img/about/word.png";
import figma from "../../assets/img/about/figma.png";
import logo from "../../assets/img/logo/logo.png";

const skillCategories = [
  {
    id: 1,
    title: "Front-End",
    items: [
      { id: 1, skill: "HTML", percentage: "100%", image: html },
      { id: 2, skill: "CSS", percentage: "100%", image: html },
      { id: 3, skill: "JavaScript", percentage: "100%", image: logo },
      { id: 4, skill: "Bootstrap", percentage: "100%", image: boot },
      { id: 5, skill: "Material UI", percentage: "100%", image: boot },
      { id: 6, skill: "jQuery", percentage: "100%", image: figma },
      { id: 7, skill: "Angular", percentage: "90%", image: figma },
      { id: 8, skill: "React", percentage: "100%", image: figma },
      { id: 9, skill: "Tailwind CSS", percentage: "100%", image: figma },
      { id: 10, skill: "Vue.js", percentage: "100%", image: figma },

    ],
  },
  {
    id: 2,
    title: "Back-End",
    items: [
      { id: 9, skill: "PHP", percentage: "90%", image: word },
      { id: 10, skill: "Laravel", percentage: "90%", image: word },
      { id: 11, skill: "OOP", percentage: "90%", image: figma },
      { id: 12, skill: "Node.js", percentage: "100%", image: figma },
      { id: 13, skill: "Express.js", percentage: "100%", image: figma },
      { id: 14, skill: "Python", percentage: "70%", image: figma },
      { id: 15, skill: "Java", percentage: "80%", image: figma },
      { id: 16, skill: "C# / ASP.NET Core", percentage: "90%", image: html },
      { id: 17, skill: "Dart", percentage: "80%", image: figma },
      { id: 18, skill: "Flutter", percentage: "70%", image: figma },
      { id: 20, skill: "ASP.Net  core MVC Framework", percentage: "90%", image: html },
      { id: 22, skill: "Blazor", percentage: "90%", image: html },
      { id: 23, skill: "Web API", percentage: "90%", image: html },
      { id: 24, skill: "Entity Framework Core", percentage: "90%", image: html },


    ],
  },
  {
    id: 3,
    title: "Databases",
    items: [
      { id: 19, skill: "SQL / MySQL", percentage: "100%", image: boot },
      { id: 20, skill: "SQL Oracle", percentage: "90%", image: boot },
      { id: 21, skill: "DataBase - ORM - MangoDB", percentage: "100%", image: boot },
      { id: 22, skill: "Microsoft SQL Server", percentage: "100%", image: boot },
      
    ],
  },
  {
    id: 4,
    title: "CMS & Tools",
    items: [

 
  { id: 19, skill: "Git / GitHub", percentage: "100%", image: figma },
  { id: 20, skill: "Docker", percentage: "100%", image: figma },
  { id: 21, skill: "Kubernetes", percentage: "100%", image: figma },
  { id: 22, skill: "CI/CD", percentage: "100%", image: figma },
  { id: 26, skill: "GitLab CI/CD", percentage: "100%", image: figma },
  { id: 27, skill: "Azure DevOps", percentage: "100%", image: figma },
  { id: 28, skill: "AWS CodePipeline", percentage: "100%", image: figma },
  { id: 29, skill: "Google Cloud Build", percentage: "100%", image: figma },
  { id: 31, skill: "WordPress / CMS / MVC", percentage: "100%", image: word },
  { id: 32, skill: "MVC Joomla", percentage: "90%", image: word },
  { id: 33, skill: "MS Office / ICDL", percentage: "100%", image: word },
  { id: 34, skill: "Windows / Linux / Mac", percentage: "100%", image: boot },
  { id: 35, skill: "Photoshop", percentage: "55%", image: figma },
  { id: 36, skill: "Adobe Illustrator", percentage: "90%", image: figma },
  { id: 37, skill: "Adobe Premiere", percentage: "90%", image: figma },
    ],
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb skills__thumb">
              <img src={personalInfothumb} alt="Hussam Alnabelsi" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about__onecontent skills__content">
              <h2>My Skills</h2>
              <p className="skills__intro">
                Ich verfüge über umfassende Kenntnisse in Front-End- und Back-End-Entwicklung,
                Datenbanken, CMS-Systemen sowie Design- und Office-Tools. Mein Fokus liegt auf
                modernen, strukturierten und benutzerfreundlichen Weblösungen.
              </p>

              <div className="skills__categories">
                {skillCategories.map((category) => (
                  <div className="skills__category" key={category.id}>
                    <div className="skills__categoryHead">
                      <h3>{category.title}</h3>
                    </div>

<div className="row g-4">
  {category.items.map(({ id, skill, image, percentage }) => (
    <div key={id} className="col-12 col-md-6 col-lg-3 d-flex">
      <div className="abox myskill__item skills__card h-100 w-100">
        <div className="thumb skills__icon">
          <img src={image} alt={skill} />
        </div>

        <div className="mys skills__details">
          <span className="ptext d-block text-truncate" title={skill}>
            {skill}
          </span>
          <h1 className="fw-600">{percentage}</h1>
        </div>
      </div>
    </div>
  ))}
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

export default Skills;