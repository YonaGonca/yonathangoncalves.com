import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";
import ModeImage from "./ModeImage";

export default function ProjectCard({ project }) {
  const { t } = useSite();

  return (
    <div className="project">
      {project.ownProject ? (
        <div id="project_company">{t("Own project")}</div>
      ) : (
        project.company && (
          <div id="project_company">
            {t("Working for")}: {project.company}
          </div>
        )
      )}
      <Link to={`/projects/${project.slug}`}>
        <div id="project_title">{project.title}</div>
      </Link>
      <Link to={`/projects/${project.slug}`} id="project_image">
        <ModeImage
          light={project.imageLight}
          dark={project.imageDark}
          alt="Project preview in light and dark mode"
          className="project_image_change"
        />
        {project.imageHover && (
          <img src={project.imageHover} alt="" className="project_image_hover" />
        )}
      </Link>
      {project.technologies && project.technologies.length > 0 && (
        <div id="project_technologies">
          {project.technologies.map((tech) => (
            <div className="tech_icon" key={tech.label}>
              {tech.iconLight ? (
                <ModeImage light={tech.iconLight} dark={tech.iconDark} alt={`${tech.label} logo`} />
              ) : (
                <img src={tech.icon} alt={`${tech.label} logo`} />
              )}
              <span className="tech_tooltip">{tech.label}</span>
            </div>
          ))}
        </div>
      )}
      <div id="project_down">
        <div id="project_description">{t(project.descriptionKey)}</div>
              <div id="project_links">
                <ul id="project_links_list">
                  <li>
                    <Link to={`/projects/${project.slug}`} className="project_link">
                      {t("Article")}
                    </Link>
                  </li>
                  {project.sourceUrl && (
                    <li>
                      <a
                        href={project.sourceUrl}
                        className="project_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("Source")} <i className="ri-external-link-line"></i>
                      </a>
                    </li>
                  )}
                  {project.demoUrl && (
                    <li>
                      <Link to={project.demoUrl} className="project_link">
                        {t("Demo")} <i className="ri-external-link-line"></i>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
      </div>
      
    </div>
  );
}
