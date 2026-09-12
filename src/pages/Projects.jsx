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
    <div className="container" id="container_projects">
      <div id="projects_header">
        <h4 className="projects_title">{t("Projects")}</h4>
      </div>
      <div id="projects">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} titleLinksToArticle />
        ))}
      </div>
    </div>
  );
}
