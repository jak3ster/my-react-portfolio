import React from 'react';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div class="area" >
            <Router>
              <div className="app">
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/my-react-portfolio" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
              </div>
            </Router>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
  );
}

export default App;
