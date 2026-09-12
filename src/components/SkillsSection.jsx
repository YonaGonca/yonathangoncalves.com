import { useSite } from "../context/SiteContext";
import ModeImage from "./ModeImage";
import { SKILLS } from "../data/projects";

function Skill({ skill }) {
  if (skill.iconLight) {
    return (
      <div className="skill">
        <ModeImage light={skill.iconLight} dark={skill.iconDark} alt={`${skill.label} logo`} />
        <h6>{skill.label}</h6>
      </div>
    );
  }
  return (
    <div className="skill">
      <img src={skill.icon} alt={`${skill.label} logo`} />
      <h6>{skill.label}</h6>
    </div>
  );
}

export default function SkillsSection() {
  const { t } = useSite();

  return (
    <div className="container" id="container_skills">
      <div id="skills_header">
        <h4>{t("Skills")}</h4>
      </div>
      <div id="skills_boxes">
        <div id="box1" className="box">
          <h5>{t("Proficient")}</h5>
          <div className="skills_box_container">
            {[...SKILLS.proficient, ...SKILLS.learning].map((skill) => (
              <Skill key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
        <div id="box2" className="box">
          <h5>{t("Tools")}</h5>
          <div className="skills_box_container">
            {[...SKILLS.interested, ...SKILLS.tools].map((skill) => (
              <Skill key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
