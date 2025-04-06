import React, { useRef } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
// import Particles from "./librabryCode/Particles";
import Project from "./components/Project";
import SplashCursor from './SplashCursor'
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const project = useRef(null)
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      {/* Particles Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Ensures particles stay behind the content
        }}
      >
        {/* <Particles
          particleColors={["#FF416C", "#ffffff"]}
          particleCount={150}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
        <SplashCursor/>
      </div>

      {/* Main Content */}
      <Header scrollToSection={scrollToSection} homeRef={homeRef} skillRef={skillRef} contactRef={contactRef} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
      <div ref={project}>
        <Project />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
