import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import UXProcess from "./components/UXProcess";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

useEffect(() => {
  AOS.init({
    duration: 900,
    once: false,
    mirror: true,
    offset: 120,
  });
}, []);


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <UXProcess />
        <Projects />
        <Skills />
        <Tools />
        <Timeline />
        <ContactForm />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
