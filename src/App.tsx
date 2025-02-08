import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Blog from './components/sections/Blog';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-primary-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
