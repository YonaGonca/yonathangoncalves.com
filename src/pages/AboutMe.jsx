import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";
import SkillsSection from "../components/SkillsSection";
import { CV_LINKS } from "../data/projects";
import "../styles/aboutme.css";

export default function AboutMe() {
  const { t, language } = useSite();

  useEffect(() => {
    document.title = `Yonathan Gonçalves | ${t("About Me")}`;
  }, [t]);

  const cvHref = CV_LINKS[language] || CV_LINKS.en;

  return (
    <>
      <div className="container" id="container_aboutme">
        <div id="aboutme_header">
          <h4>{t("About me")}</h4>
        </div>
        <div id="aboutme_content">
        <div id="aboutme_text">
          <img id="aboutme_photo" src="/assets/images/foto.png" alt="Yonathan Gonçalves" />
          <p>
            {t(
              "Hello, I’m Yonathan Gonçalves, a developer with a passion for programming and problem-solving, with experience in both mobile and web software development. I’m currently working at Infra Support AG as a Software Engineer. Although I initially thought my life's work would be as a physicist, I discovered that my true passion lies in programming and solving problems through code."
            )}
          </p>

          <p>
            {t(
              "Since then, I have dedicated myself to learning and refining my skills in software development, working on increasingly challenging projects that allow me to expand my knowledge and abilities. I enjoy tackling technical challenges and finding creative solutions."
            )}
          </p>

          <p>
            {t(
              "My background in physics has provided me with a unique analytical perspective, which helps me approach complex problems and optimize the performance of the systems I work on."
            )}
          </p>

          <p>
            {t(
              "In my free time, I enjoy watching football, going to the cinema, hiking, and geocaching. I am always looking for new challenges that allow me to grow both personally and professionally."
            )}
          </p>

          <p>
            {t(
              "This portfolio is a showcase of my work and the skills I have developed throughout my career. Here, you can find "
            )}
            <Link to="/projects">{t("projects")}</Link>
            {t(
              " I have worked on, each reflecting my approach to problem-solving and my passion for software development."
            )}
          </p>
        </div>
        </div>

        <div id="container_cv">
          <a href={cvHref} target="_blank" rel="noreferrer" className="cv_link" aria-label="Download CV">
            CV <i className="ri-file-download-line"></i>
          </a>
        </div>
      </div>

      <SkillsSection />
    </>
  );
}
