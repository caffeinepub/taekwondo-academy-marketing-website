import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What should I wear to my first class?',
      answer: 'For your first trial class, wear comfortable athletic clothing (t-shirt and sweatpants or athletic shorts). You will train barefoot, so no shoes are needed on the mat. After enrollment, you will need to purchase a traditional Taekwondo uniform (dobok), which is available at our academy.'
    },
    {
      question: 'How does the belt ranking system work?',
      answer: 'Taekwondo uses a colored belt system to indicate rank and progress. Students begin as white belts and progress through yellow, green, blue, red, and eventually black belt. Testing occurs every 2-3 months depending on the student\'s progress and attendance. Each test evaluates techniques, forms, sparring, and knowledge of Taekwondo principles.'
    },
    {
      question: 'Do you offer a free trial class?',
      answer: 'Yes! We offer one free trial class so you can experience our training firsthand. No uniform or equipment is required for the trial. Simply wear comfortable athletic clothing and come ready to learn. Contact us to schedule your free trial class.'
    },
    {
      question: 'What is the minimum age to start training?',
      answer: 'We accept students as young as 4 years old in our Little Dragons program. This program is specifically designed for young children and focuses on basic motor skills, coordination, and listening skills through fun, age-appropriate activities. There is no maximum age—we welcome adult beginners of all ages!'
    },
    {
      question: 'Is Taekwondo safe for children?',
      answer: 'Yes, Taekwondo is very safe when taught properly. Safety is our top priority. We use age-appropriate training methods, protective equipment for sparring, and maintain strict supervision. Our instructors are trained in safety protocols and create a controlled environment where students can learn and grow safely.'
    },
    {
      question: 'How often should I attend classes?',
      answer: 'We recommend attending at least 2-3 classes per week for steady progress. Consistency is key in martial arts training. Our Unlimited membership allows you to train as often as you like, which is ideal for students who want to progress quickly or are preparing for belt tests or competitions.'
    },
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, all our memberships are month-to-month with no long-term contracts. You can cancel at any time with 30 days notice, and there are no cancellation fees. We believe in earning your membership every month through quality instruction and a positive training environment.'
    },
    {
      question: 'Do you compete in tournaments?',
      answer: 'Yes! We have a dedicated Competition Team for students interested in tournament competition. Participation in tournaments is optional and not required for belt advancement. However, competition can be a great way to test your skills, build confidence, and represent our academy. We attend local, regional, and national tournaments throughout the year.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We have answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
