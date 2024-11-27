import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <main className="relative">
      <Background3D />
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <Navbar />
          <Hero />
        </div>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <Services />
        </div>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <About />
        </div>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <Experience />
        </div>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <Testimonials />
        </div>
        <div className="section-wrapper bg-opacity-50 backdrop-blur-sm">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
