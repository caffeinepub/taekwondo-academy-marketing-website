import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/tkd-logo.dim_512x512.png"
                alt="Academy Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-lg">Elite Taekwondo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building discipline, confidence, and excellence through martial arts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="hover:text-primary transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('schedule')}
                  className="hover:text-primary transition-colors"
                >
                  Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Martial Arts Way</li>
              <li>Your City, ST 12345</li>
              <li className="pt-2">
                <a href="tel:555-123-4567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@elitetkd.com" className="hover:text-primary transition-colors">
                  info@elitetkd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Hours:</strong>
              <br />
              Mon-Fri: 3pm - 9pm
              <br />
              Sat: 9am - 2pm
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
