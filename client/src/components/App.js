import React from "react";
import Welcome from "./Welcome";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Welcome />
      <About />
      {/* <Projects /> */}
      {/* <ContactMe />*/}
      <Footer />
    </div>
  );
}

export default App;
