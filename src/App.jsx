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
      <Hero />
      <About />
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
