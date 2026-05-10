import { Suspense } from 'react'; // Forcing TS server update
import Header from './components/Header';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import NeuralBackground from './components/3d/NeuralBackground';

function App() {
  return (
    <>
      <Header />
      <div className="canvas-container">
        <Suspense fallback={null}>
          <NeuralBackground />
        </Suspense>
      </div>
      
      <main>
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
