import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const { t } = useSite();

  useEffect(() => {
    document.title = `Yonathan Gonçalves | ${t("Home")}`;
  }, [t]);

  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <div className="container" id="container_introduction">
        <div id="introduction_text">
          <h3>{t("Hey, I'm Yonathan.")}</h3>
          <p>
            {t(
              "I'm a developer with a deep passion for problem-solving and who finds joy in learning. I have experience in both mobile and web software development, and I'm currently working at Infra Support AG as a Software Engineer."
            )}
          </p>
          <p>
            {t("On this site you can check out all the ")}
            <Link className="link_introduction" to="/projects">
              {t("projects")}
            </Link>{" "}
            {t("I've worked on, or learn more")}{" "}
            <Link className="link_introduction" to="/about-me">
              {t("about me")}
            </Link>
            .
          </p>
        </div>
        <div id="introduction_image">
          <img src="/assets/images/atom.png" alt="Portfolio logo" />
        </div>

        <div id="container_arrow_projects">
          <p>{t("Projects")}</p>
          <i className="ri-arrow-down-line"></i>
        </div>
      </div>

      <div className="container" id="container_projects">
        <div id="projects_header">
          <h4>{t("Projects")}</h4>
          <div id="all_projects_link">
            <Link to="/projects" aria-label="Go to all Projects">
              {t("All projects")}
            </Link>
          </div>
        </div>
        <div id="projects">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <SkillsSection />
    </>
  );
}
