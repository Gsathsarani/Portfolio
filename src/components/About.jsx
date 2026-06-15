import myPhoto from "../assets/profile.png";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-image" data-aos="fade-right" data-aos-delay="100">
        <img src={myPhoto} alt="Profile" />
      </div>

      <div className="about-content" data-aos="fade-left" data-aos-delay="250">
        <p className="eyebrow">About Me</p>

        <h2>
          Hi, I'm Gothnima Sathsarani,
          <br />
          UI/UX Designer
        </h2>

        <p>
          I am a passionate UI/UX Designer dedicated to creating meaningful digital experiences that balance user needs with business goals. With experience designing web and mobile applications, I transform complex problems into intuitive, accessible, and visually engaging solutions.
        </p>

        <p>
          My design approach combines user research, wireframing, prototyping, usability testing, and design systems to craft seamless user journeys. I enjoy collaborating with cross-functional teams, turning ideas into products that are both functional and impactful.
        </p>

        <p>
          Driven by curiosity and continuous learning, I strive to create experiences that not only look great but also improve the way people interact with technology.
        </p>
      </div>
    </section>
  );
}

export default About;