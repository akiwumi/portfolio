import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills__header reveal">
          <span className="section-label">02 &mdash; Skills</span>
          <h2 className="section-title">
            Tools of
            <br />
            <em>the Trade</em>
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skill-block reveal" key={group.title}>
              <div className="skill-block__title">
                <span className="skill-block__num">&mdash;</span>
                {group.title}
              </div>
              <div className="tags">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
