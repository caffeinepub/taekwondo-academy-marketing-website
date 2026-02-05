import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: 'per month',
      description: 'Perfect for beginners getting started',
      features: [
        '2 classes per week',
        'Access to all age-appropriate programs',
        'Belt testing included',
        'Free uniform (first month only)'
      ]
    },
    {
      name: 'Unlimited',
      price: '$149',
      period: 'per month',
      description: 'Best value for dedicated students',
      features: [
        'Unlimited classes',
        'Access to all programs',
        'Priority belt testing',
        'Free uniform',
        '10% discount on equipment',
        'Guest passes (2 per month)'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$249',
      period: 'per month',
      description: 'Train together, grow together',
      features: [
        'Unlimited classes for up to 4 family members',
        'Access to all programs',
        'Priority belt testing',
        'Free uniforms for all',
        '15% discount on equipment',
        'Guest passes (4 per month)'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Membership Options</h2>
          <p className="text-lg text-muted-foreground">
            Flexible membership plans designed to fit your schedule and budget. All memberships include access to our 
            world-class facilities and instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 relative ${
                plan.popular ? 'border-primary shadow-martial' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period.split(' ')[1]}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-accent/50 bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm">
                <p><strong>No Long-Term Contracts:</strong> All memberships are month-to-month with no cancellation fees.</p>
                <p><strong>Free Trial:</strong> Try your first class free before committing to a membership.</p>
                <p><strong>Military & First Responder Discount:</strong> 10% off any membership plan.</p>
                <p className="text-xs text-muted-foreground pt-2">
                  * Pricing shown is for reference and may vary. Contact us for current rates and special promotions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
