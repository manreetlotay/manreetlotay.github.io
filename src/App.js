import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'
import React from 'react'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Work />
     <Projects />
     <Footer />
    </div>
  );
}

export default App
