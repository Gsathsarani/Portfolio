import { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show-contact");
        } else {
          section.classList.remove("show-contact");
        }
      },
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="section contact-form-section contact-reveal"
      id="contact-form"
    >
      <p className="eyebrow">Get in Touch</p>

      <h2>Let's build something great.</h2>

      <p className="contact-form-intro">
        Open to UI/UX design roles, web design projects, and freelance
        opportunities. Feel free to send me a message.
      </p>

      <form className="contact-form-box" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            placeholder="Tell me about your project or opportunity..."
            required
          />
        </div>

        <div className="contact-form-actions">
          <button type="submit" className="send-btn">
            Send Message
          </button>

          <span>or</span>

          <a
            href="https://www.linkedin.com/in/gothnima-sathsarani-211b70218"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-contact-btn"
          >
            <FaLinkedin />
            Message on LinkedIn
          </a>
        </div>

        {success && (
          <p className="success-message">
            ✓ Message sent successfully! I'll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;