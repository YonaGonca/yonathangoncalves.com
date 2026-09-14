import { useEffect } from "react";
import { useSite } from "../context/SiteContext";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
  const { t } = useSite();

  useEffect(() => {
    document.title = `Yonathan Gonçalves | ${t("Projects")}`;
  }, [t]);

  return (
    <div className="container" id="projects_page_container">
      <div id="projects_page_header">
        <h4 className="projects_title">{t("Projects")}</h4>
      </div>
      <div id="projects_page_grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
