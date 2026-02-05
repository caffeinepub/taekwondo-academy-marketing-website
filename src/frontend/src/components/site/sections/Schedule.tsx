import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Info } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { day: 'Monday', classes: [
      { time: '4:00 PM - 4:45 PM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '5:00 PM - 6:00 PM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '6:15 PM - 7:15 PM', program: 'Teen & Adult', level: 'All Levels' },
      { time: '7:30 PM - 8:30 PM', program: 'Competition Team', level: 'Invite Only' }
    ]},
    { day: 'Tuesday', classes: [
      { time: '4:00 PM - 4:45 PM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '5:00 PM - 6:00 PM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '6:15 PM - 7:15 PM', program: 'Teen & Adult', level: 'All Levels' }
    ]},
    { day: 'Wednesday', classes: [
      { time: '4:00 PM - 4:45 PM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '5:00 PM - 6:00 PM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '6:15 PM - 7:15 PM', program: 'Teen & Adult', level: 'All Levels' },
      { time: '7:30 PM - 8:30 PM', program: 'Competition Team', level: 'Invite Only' }
    ]},
    { day: 'Thursday', classes: [
      { time: '4:00 PM - 4:45 PM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '5:00 PM - 6:00 PM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '6:15 PM - 7:15 PM', program: 'Teen & Adult', level: 'All Levels' }
    ]},
    { day: 'Friday', classes: [
      { time: '4:00 PM - 4:45 PM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '5:00 PM - 6:00 PM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '6:15 PM - 7:15 PM', program: 'Teen & Adult', level: 'All Levels' }
    ]},
    { day: 'Saturday', classes: [
      { time: '9:00 AM - 9:45 AM', program: 'Little Dragons', level: 'Ages 4-6' },
      { time: '10:00 AM - 11:00 AM', program: 'Kids Program', level: 'Ages 7-12' },
      { time: '11:15 AM - 12:15 PM', program: 'Teen & Adult', level: 'All Levels' },
      { time: '12:30 PM - 2:00 PM', program: 'Open Training', level: 'All Students' }
    ]}
  ];

  return (
    <section id="schedule" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Class Schedule</h2>
          <p className="text-lg text-muted-foreground">
            We offer classes throughout the week to accommodate busy schedules. All classes are led by certified instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {schedule.map((day, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {day.classes.map((classItem, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="font-semibold">{classItem.program}</div>
                        <div className="text-sm text-muted-foreground">{classItem.time}</div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {classItem.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-accent/50 bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm">
                <p><strong>Trial Class:</strong> First class is free! No uniform required for your trial.</p>
                <p><strong>Arrival:</strong> Please arrive 10 minutes early to allow time for check-in and warm-up.</p>
                <p><strong>Uniform:</strong> Traditional dobok (uniform) required after enrollment. Available for purchase at the academy.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
