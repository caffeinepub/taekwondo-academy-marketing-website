import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/tkd-hero-banner.dim_1920x800.png"
          alt="Taekwondo Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/tkd-pattern.dim_1024x1024.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px'
        }}
      />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Master the Art of{' '}
            <span className="text-accent">Taekwondo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in">
            Build discipline, confidence, and physical excellence through traditional martial arts training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('programs')}
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary/90 backdrop-blur-sm">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm uppercase tracking-wide">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm uppercase tracking-wide">Dedicated to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
