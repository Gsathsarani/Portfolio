import {
  SiFigma,
  SiCanva,
  SiMiro,
  SiGooglegemini,
  SiOpenai,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiJira,
  SiTrello,
  SiSlack,
} from "react-icons/si";

import {
  FaRobot,
  FaImage,
  FaPenNib,
  FaProjectDiagram,
  FaFileAlt,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

const toolGroups = [
  {
    category: "Design & Prototyping",
    tools: [
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Adobe Photoshop", icon: <FaImage />, color: "#31A8FF" },
      { name: "Adobe XD", icon: <FaPenNib />, color: "#FF61F6" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
      { name: "Miro", icon: <SiMiro />, color: "#FFD02F" },
      { name: "Claude AI", icon: <FaRobot />, color: "#D97757" },
      { name: "Draw.io", icon: <FaProjectDiagram />, color: "#F08705" },
      { name: "Gemini", icon: <SiGooglegemini />, color: "#8E75B2" },
    ],
  },
  {
    category: "AI & Emerging Tools",
    tools: [
      { name: "Claude AI", icon: <FaRobot />, color: "#D97757" },
      { name: "ChatGPT", icon: <SiOpenai />, color: "#10A37F" },
      { name: "Midjourney", icon: <FaRobot />, color: "#9D9DFF" },
      { name: "Figma AI", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
  {
    category: "Web & Frontend",
    tools: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React JS", icon: <FaReact />, color: "#61DAFB" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
    ],
  },
  {
    category: "Productivity & Project Management",
    tools: [
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      { name: "Trello", icon: <SiTrello />, color: "#0052CC" },
      { name: "Slack", icon: <SiSlack />, color: "#4A154B" },
      { name: "MS Office Suite", icon: <FaFileAlt />, color: "#D83B01" },
    ],
  },
];

function Tools() {
  return (
    <section className="section tools-section">
      <p className="eyebrow" data-aos="fade-up">
        Software Proficiency
      </p>

      <h2 data-aos="fade-up" data-aos-delay="100">
        Tools I Use
      </h2>

      <p
        className="tools-subtitle"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Professional tools and technologies I use to design, prototype,
        collaborate, and build digital experiences.
      </p>

      <div className="tools-wrapper">
        {toolGroups.map((group, groupIndex) => (
          <div
            className="tool-group"
            key={group.category}
            data-aos="fade-up"
            data-aos-delay={groupIndex * 150}
          >
            <h3>{group.category}</h3>

            <div className="tools-grid">
              {group.tools.map((tool, index) => (
                <div
                  className="tool-card"
                  key={tool.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                >
                  <div
                    className="tool-icon"
                    style={{ color: tool.color }}
                  >
                    {tool.icon}
                  </div>

                  <span className="tool-name">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;