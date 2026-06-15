import { useEffect } from "react";

const experiences = [
  {
    date: "Sep 2025 – Present",
    title: "Associate UI/UX Engineer",
    company: "TeachMeIt Software Solutions · Remote",
    description:
      "Designing user-friendly web and mobile interfaces, creating wireframes, prototypes, design systems, and collaborating with developers for accurate implementation.",
  },
  {
    date: "Aug 2024 – Aug 2025",
    title: "Intern UI/UX Engineer",
    company: "TeachMeIt Software Solutions · Remote",
    description:
      "Assisted in UI/UX design tasks, created user flows, wireframes, prototypes, and supported product design improvements for internal and client projects.",
  },
];

const education = [
  {
    course: "BSc. (Hons) Computing and Information Systems",
    place: "Sabaragamuwa University of Sri Lanka",
    year: "2026",
  },
  {
    course: "Responsive Web Design Developer Certification",
    place: "freeCodecamp",
    year: "2021",
  },
  {
    course: "Complete Web & Mobile Designer Certification",
    place: "Udemy",
    year: "2025",
  },
];

function Timeline() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section career-section" id="resume">
      <div className="career-left scroll-reveal reveal-left">
        <p className="eyebrow">Experience</p>
        <h2>Professional Experience</h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="career-right scroll-reveal reveal-right">
        <div className="side-card">
          <p className="side-title">Education & certifications</p>

          {education.map((item, index) => (
            <div className="education-item" key={index}>
              <h4>{item.course}</h4>
              <p>{item.place} · {item.year}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Timeline;