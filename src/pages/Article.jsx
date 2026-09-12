import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSite } from "../context/SiteContext";
import { PROJECTS } from "../data/projects";
import { ARTICLE_CONTENT } from "../data/articleContent";
import "../styles/article.css";

export default function Article() {
  const { slug } = useParams();
  const { t } = useSite();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = `Yonathan Gonçalves | ${t("Article")}`;
  }, [t]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="container" id="container_article">
      <div id="article_header">
        {project.ownProject ? (
          <p className="company">{t("Own project")}</p>
        ) : (
          project.company && (
            <p className="company">
              {t("Working for")}: {project.company}
            </p>
          )
        )}
        <h1>{project.title}</h1>
        <p className="date">{project.date}</p>
      </div>
      <div
        id="article_body"
        dangerouslySetInnerHTML={{ __html: ARTICLE_CONTENT[slug] || "" }}
      />
    </div>
  );
}
