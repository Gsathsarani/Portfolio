const skillCategories = [
  {
    title: "Product & UX Design",
    skills: [
      "UX Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    title: "Visual Design",
    skills: [
      "UI Design",
      "Brand Identity",
      "Typography",
      "Visual Storytelling",
      "Motion Design",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "Responsive Design",
      "Git & GitHub",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Presentation",
      "Team Collaboration",
      "Creative Thinking",
      "Problem Solving",
      "Time Management",
    ],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <p className="eyebrow" data-aos="fade-up">
        Capabilities
      </p>

      <h2 data-aos="fade-up" data-aos-delay="100">
        Skills & Expertise
      </h2>

      <div className="skills-columns">
        {skillCategories.map((category, index) => (
          <div
            className="skill-category"
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

