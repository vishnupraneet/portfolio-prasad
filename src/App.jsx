import React from 'react';
import Hero from './components/Hero';
import About from './components/AboutSection';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
// import Gallery from './components/GallerySection';
import Contact from './components/ContactSection';
import Footer from './components/FooterSection';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Experience/>
      <Highlights/>
      {/* <Gallery/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;