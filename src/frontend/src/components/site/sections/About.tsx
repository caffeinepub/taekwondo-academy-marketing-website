import { Award, Target, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in every technique and every class.'
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'Building mental strength and focus that extends beyond the dojang.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Creating a supportive family environment where everyone grows together.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Honoring the traditions of Taekwondo while fostering mutual respect.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Our Academy</h2>
          <p className="text-lg text-muted-foreground">
            Elite Taekwondo Academy has been a cornerstone of martial arts excellence in our community for over 15 years. 
            We combine traditional Taekwondo techniques with modern training methods to develop well-rounded martial artists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Training Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                At Elite Taekwondo Academy, we believe that martial arts training is about more than just physical techniques. 
                Our comprehensive curriculum develops the whole person—mind, body, and spirit. Through consistent practice and 
                dedicated instruction, our students learn valuable life skills including self-discipline, perseverance, respect, 
                and confidence.
              </p>
              <p className="text-muted-foreground">
                Whether you're a complete beginner or an experienced martial artist, our certified instructors will guide you 
                on your journey. We maintain small class sizes to ensure personalized attention and create a safe, supportive 
                environment where students of all ages and abilities can thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
