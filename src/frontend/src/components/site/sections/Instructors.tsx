import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Instructors() {
  const instructors = [
    {
      name: 'Master Kim Chen',
      rank: '6th Dan Black Belt',
      title: 'Head Instructor & Academy Director',
      specialties: ['Olympic Sparring', 'Traditional Forms', 'Leadership Development'],
      bio: 'Master Kim has over 25 years of Taekwondo experience and has trained national champions. He holds certifications from the Kukkiwon World Taekwondo Headquarters and is passionate about developing both technical excellence and strong character in his students.'
    },
    {
      name: 'Instructor Sarah Martinez',
      rank: '4th Dan Black Belt',
      title: 'Kids Program Director',
      specialties: ['Youth Development', 'Little Dragons', 'Character Education'],
      bio: 'Instructor Martinez specializes in working with young students and has a background in early childhood education. She creates engaging, age-appropriate classes that build confidence and discipline while keeping training fun and exciting.'
    },
    {
      name: 'Instructor David Park',
      rank: '3rd Dan Black Belt',
      title: 'Competition Team Coach',
      specialties: ['Tournament Preparation', 'Advanced Sparring', 'Conditioning'],
      bio: 'A former national competitor, Instructor Park brings high-level competition experience to our academy. He has coached numerous students to tournament success and focuses on developing both technical skills and competitive mindset.'
    },
    {
      name: 'Instructor Lisa Thompson',
      rank: '3rd Dan Black Belt',
      title: 'Adult Program Instructor',
      specialties: ['Self-Defense', 'Fitness Training', 'Forms'],
      bio: 'Instructor Thompson began her Taekwondo journey as an adult and understands the unique needs of adult students. She emphasizes practical self-defense, physical fitness, and the mental benefits of martial arts training.'
    }
  ];

  return (
    <section id="instructors" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Instructors</h2>
          <p className="text-lg text-muted-foreground">
            Learn from experienced, certified instructors who are dedicated to your success and committed to the highest 
            standards of martial arts instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="border-2 hover:shadow-martial transition-all">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">{instructor.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{instructor.rank}</Badge>
                  </div>
                </div>
                <CardDescription className="text-base font-semibold text-foreground">
                  {instructor.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
