import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';
import Resume from './Component/Resume/Resume';
import Header from './Component/Home/Header/Header';
import Home from './Component/Home/Home/Home';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
