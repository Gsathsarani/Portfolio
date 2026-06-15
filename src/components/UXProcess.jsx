import { FaSearch, FaPen, FaThLarge, FaPlay, FaCheck } from "react-icons/fa";

const steps = [
  {
    number: "1.",
    title: "Discover",
    icon: <FaSearch />,
    text: "User research, stakeholder interviews, competitor analysis and heuristic evaluation.",
    className: "step-discover",
  },
  {
    number: "2.",
    title: "Define",
    icon: <FaPen />,
    text: "Journey mapping, personas, problem statements and feature planning.",
    className: "step-define",
  },
  {
    number: "3.",
    title: "Design",
    icon: <FaThLarge />,
    text: "Wireframes, information architecture, design systems and high-fidelity UI.",
    className: "step-design",
  },
  {
    number: "4.",
    title: "Prototype",
    icon: <FaPlay />,
    text: "Interactive prototypes, micro-interactions and design iterations.",
    className: "step-prototype",
  },
  {
    number: "5.",
    title: "Deliver",
    icon: <FaCheck />,
    text: "Usability testing, developer handoff and continuous design improvements.",
    className: "step-deliver",
  },
];

function UXProcess() {
  return (
    <section className="section ux-process-section" id="ux">
      <p
  className="eyebrow"
  data-aos="fade-up"
>
  Design Process
</p>

<h2
  data-aos="fade-up"
  data-aos-delay="100"
>
  My UX Process
</h2>

<p
  className="ux-intro"
  data-aos="fade-up"
  data-aos-delay="200"
>
        A structured design process that helps transform ideas into meaningful,
        user-friendly digital products.
      </p>

      <div className="ux-orbit">
        <div className="orbit-line"></div>

        <div
  className="ux-center"
  data-aos="zoom-in"
  data-aos-duration="1000"
>
          <h3>UX</h3>
          <span>PROCESS</span>
        </div>

        {steps.map((step, index) => (
  <div
    className={`ux-step ${step.className}`}
    key={step.title}
  >
    <div
      className="ux-step-inner"
      data-aos="zoom-in"
      data-aos-delay={index * 150}
      data-aos-duration="800"
    >
            <div className="ux-step-icon">{step.icon}</div>
            <h4>
              <span>{step.number}</span> {step.title}
            </h4>
            <p>{step.text}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UXProcess;