import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span> ID - Native Speaker</span>
        <span> EN - Beginner</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Full-Stack Web - Binar Academy Bootcamp</span>
      </div>
    </div>
  );
}
