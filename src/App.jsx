import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Websites from './components/Websites';
import Process from './components/Process';
import { Logos } from './components/Extras';
import { CTA, Footer } from './components/Footer';
import SmartOpzCaseStudy from './pages/SmartOpzCaseStudy';
import DecluttrCaseStudy from './pages/DecluttrCaseStudy';
import EasigiftingCaseStudy from './pages/EasigiftingCaseStudy';
import AgnikulPrototype from './pages/AgnikulPrototype';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Work />
      <Websites />
      <Process />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

function App() {


  return (
    <Router>
      <ScrollToTop />
      <main className="bg-cream min-h-screen text-ink selection:bg-ink selection:text-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/smartopz" element={<SmartOpzCaseStudy />} />
          <Route path="/work/decluttr" element={<DecluttrCaseStudy />} />
          <Route path="/work/easigifting" element={<EasigiftingCaseStudy />} />
          <Route path="/work/agnikul" element={<AgnikulPrototype />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
