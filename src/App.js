import { useRef } from 'react';

import { Portfolio } from "./Sections/Portfolio";
import { About } from "./Sections/About";
import { ContactSection } from "./Sections/ContactSection"

import { NavBar } from "./Sections/NavBar";

import "./index.scss";

function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    return () => ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="app-container">
      <div className="empty-space"></div>
      <NavBar scrollToContact={handleScroll(contactRef)}  scrollToAbout={handleScroll(aboutRef)} scrollToPortfolio={handleScroll(portfolioRef)}/>
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}

export default App;
