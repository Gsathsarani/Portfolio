import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Gothnima
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#ux" onClick={closeMenu}>Design Process</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#resume" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;