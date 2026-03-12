import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import RoiSection from './components/RoiSection';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background-dark text-text-main font-sans selection:bg-primary selection:text-white pb-0 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-border bg-background-dark/50 transition-colors duration-300">
        <div className="text-xl md:text-2xl font-[800] font-heading tracking-widest uppercase">
          CRM <span className="text-primary font-[800]">WHATSAPP</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-text-main/10 transition-colors cursor-pointer text-text-main"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" fill="none" />}
          </button>
          <a href="https://wa.me/551931670209?text=Quero%20implantar%20o%20CRM%20no%20meu%20Whatsapp.%20Como%20podemos%20seguir%3F" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-medium transition-colors cursor-pointer text-sm tracking-wide">
            Contato
          </a>
        </div>
      </nav>

      <main className="pt-24">
        <Hero />
        <PainPoints />
        <Solution />
        <Features />
        <Benefits />
        <RoiSection />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
