import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";
import { Skill } from "../skill/skill";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        6 months full-stack web developer training at binar academy bootcamp.
      </p>
      <div className="experience-time">
        <Skill image="/js.png" measure={1} years="6 month" />
        <Skill image="/react.png" measure={1} years="6 month" />
        <Skill image="/node.png" measure={1} years="6 month" />
      </div>
    </div>
  );
}
