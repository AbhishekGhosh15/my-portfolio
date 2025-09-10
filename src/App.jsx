import React from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
