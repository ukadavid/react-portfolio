import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Project from './components/Projects/Project';
import './index.css';
import PreLoader from './components/PreLoader/PreLoader';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <>
    <PreLoader />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       
      <div id={theme}>
     
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Project />
          <Qualification />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Scrollup />
      </div>
    </ThemeContext.Provider>
    </>
  );
};

export default App;
