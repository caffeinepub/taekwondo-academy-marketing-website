import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Zap, Trophy, UsersRound } from 'lucide-react';

export default function Programs() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const programs = [
    {
      icon: Users,
      title: 'Little Dragons (Ages 4-6)',
      description: 'Our youngest students learn basic techniques, coordination, and listening skills through fun, age-appropriate activities.',
      features: ['Motor skill development', 'Basic kicks and blocks', 'Discipline and focus', 'Confidence building']
    },
    {
      icon: UsersRound,
      title: 'Kids Program (Ages 7-12)',
      description: 'Building on fundamentals with more advanced techniques, forms, and sparring while emphasizing character development.',
      features: ['Traditional forms (poomsae)', 'Self-defense techniques', 'Belt progression system', 'Leadership skills']
    },
    {
      icon: Zap,
      title: 'Teen & Adult Program (Ages 13+)',
      description: 'Comprehensive training for teens and adults focusing on fitness, self-defense, and mastery of Taekwondo techniques.',
      features: ['Advanced techniques', 'Olympic-style sparring', 'Physical conditioning', 'Stress relief']
    },
    {
      icon: Trophy,
      title: 'Competition Team',
      description: 'For dedicated students who want to compete at local, regional, and national tournaments.',
      features: ['Tournament preparation', 'Advanced sparring', 'Forms competition', 'Team camaraderie'],
      highlight: true
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg text-muted-foreground">
            We offer specialized programs tailored to different age groups and skill levels, ensuring every student receives 
            the appropriate training and attention they need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-martial transition-all ${
                program.highlight ? 'border-accent bg-accent/5' : ''
              }`}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <program.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => scrollToSection('contact')}>
            Inquire About Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
