import React, {useState} from 'react';
import {Component} from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import Info from './components/Info';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './js/script';
import { render } from 'react-dom';
// import { info } from 'console';

function App () {
    return(
      <div className="App">
        <title>Kristina Kapitanova's Portfolio</title>
        <NavigationBar></NavigationBar>
        <Info name="Kristina"></Info>
        <About></About>
        <Skills></Skills>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
}

export default App;
