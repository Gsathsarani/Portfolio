import mobileUI from "../assets/projects/Goodreads.png";
import ecommerce from "../assets/projects/Ganesh.png";
import dashboard from "../assets/projects/Medicare.png";

import mobileUI2 from "../assets/projects/Mr.Barber.png";
import ecommerce2 from "../assets/projects/Foodies.png";
import dashboard2 from "../assets/projects/HR portal.png";




const projects = [
  {
    title: "GoodReads Redesign Case Study",
    tag: "UI/UX · Figma · Behance case study",
    image: mobileUI,
    text: "A UX case study of the Goodreads mobile application involving heuristic evaluation, competitive benchmarking, and usability analysis. Redesigned key user journeys and interfaces to improve navigation, information architecture, and user engagement.",
  },
  {
    title: "Ganesh Hotel System",
    tag: "UI/UX · Figma · MERN Stack · MongoDB",
    image: ecommerce,
    text: "A clean, minimalist, and modern user interface for an all-in-one hotel management system. Contributed as the UI/ UX designer across the entire platform, focusing on usability, user flow, and consistency. The system integrates multiple modules for hotel management sector.",
  },
  {
    title: "MediCare Mobile App",
    tag: "UI/UX · Figma",
    image: dashboard,
    text: "Designed a healthcare mobile application for private hospital services, including doctor profiles, channeling schedules, online consultations, pharmacy access, and user account management. Focused on creating an intuitive user experience for healthcare service access.",
  },
  {
    title: "Mr.Barber Saloon Website",
    tag: "UI/UX · Figma",
    image: mobileUI2,
    text: "A user-centered barbershop website to streamline appointment booking and service scheduling. Focused on improving user experience through intuitive booking flows, easy staff availability management, and efficient interaction for both customers and staff.",
  },
  {
    title: "Foodies",
    tag: "UI/UX · Figma",
    image: ecommerce2,
    text: "A modern e-commerce mobile application for online fast food ordering, focusing on intuitive navigation and seamless user experience. Created user-friendly interfaces with prototypes for food browsing, product search, wishlist management, cart functionality, and order placement.",
  },
  {
    title: "HR Management Portal",
    tag: "UI/UX · Figma",
    image: dashboard2,
    text: "A clean and intuitive HR management web portal with modules for employee management, payroll, leave tracking, and dashboards. Designed based on user research and UX analysis to improve workflow efficiency, usability, and clear data visualization for HR operations.",
  },
];

function Projects() {
  return (
    <section className="section" id="work">
      <p className="eyebrow">Selected Work</p>
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
  <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>

    <p className="tag">{project.tag}</p>
    <h3>{project.title}</h3>
    <p>{project.text}</p>
  </div>
))}
      </div>
    </section>
  );
}

export default Projects;