import { FaDownload, FaPaperPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Social Icons */}
      <div className="social-sidebar hero-animate-right">
        <a href="https://www.facebook.com/sathsarani.gunarathna.2025?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaFacebookF />
        </a>

        <a href="https://www.linkedin.com/in/gothnima-sathsarani-211b70218" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaLinkedinIn />
        </a>

        <a href="https://www.behance.net/gothnimsathsar" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaBehance />
        </a>

        <a href="https://github.com/Goth1009" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaGithub />
        </a>
      </div>

      <p className="eyebrow" data-aos="fade-up" data-aos-delay="100">
        UI/UX Design · Web Development · UX Research
      </p>

      <h1 data-aos="fade-up" data-aos-delay="250">
        Turning Ideas into Exceptional Digital Experiences
        <br />
        That Users Love to Explore
      </h1>

      <p className="hero-text" data-aos="fade-up" data-aos-delay="400">
        Combine creativity and strategic thinking to design products that solve real problems.
      </p>

      <div className="hero-buttons hero-animate-up delay-4">
        <a href="/cv.pdf" download className="hero-btn download-cv-btn">
          <FaDownload />
          Download CV
        </a>

        <a href="mailto:gothnimasathsarani@gmail.com" className="hero-btn hire-btn">
          <FaPaperPlane />
          Hire Me Now
        </a>
      </div>
    </section>
  );
}

export default Hero;