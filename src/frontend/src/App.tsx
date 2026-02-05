import { useState, useEffect } from 'react';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import HomeHero from './components/site/sections/HomeHero';
import About from './components/site/sections/About';
import Programs from './components/site/sections/Programs';
import Schedule from './components/site/sections/Schedule';
import Instructors from './components/site/sections/Instructors';
import Pricing from './components/site/sections/Pricing';
import FAQ from './components/site/sections/FAQ';
import Contact from './components/site/sections/Contact';
import AdminInquiries from './pages/AdminInquiries';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'admin'>('home');
  const { identity } = useInternetIdentity();

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'admin') {
    return <AdminInquiries />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <About />
        <Programs />
        <Schedule />
        <Instructors />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
