import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <h3 data-aos="fade-up" data-aos-delay="100">Gothnima</h3>

      <p data-aos="fade-up" data-aos-delay="200">
        UI/UX Designer · Web Designer · UX Researcher
      </p>

      <div className="footer-socials" data-aos="zoom-in" data-aos-delay="300">
        <a href="https://www.linkedin.com/in/gothnima-sathsarani-211b70218" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://www.behance.net/gothnimsathsar" target="_blank" rel="noreferrer">
          <FaBehance />
        </a>

        <a href="https://github.com/Goth1009" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      <span data-aos="fade-up" data-aos-delay="400">
        © 2026 Gothnima Gunarathna. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;