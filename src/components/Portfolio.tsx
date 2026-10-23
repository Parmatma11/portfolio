import { useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import Preloader from './echo/Preloader';
import Navbar from './echo/Navbar';
import Hero from './echo/Hero';
import About from './echo/About';
import Experience from './echo/Experience';
import Works from './echo/Works';
import Services from './echo/Services';
import Contact from './echo/Contact';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <main className="relative bg-cream">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <Hero startAnimation={loaded} />
      <About />
      <Experience />
      <Works />
      <Services />
      <Contact />
    </main>
  );
};

export default Portfolio;
