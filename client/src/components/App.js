import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Nav from "./Navbar";

function App() {
  return (
    <Router>
      <div className="body-rapper">
        <div className="container">
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/about" component={About} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/contact" component={ContactMe} exact />
          </Switch>
        </div>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
