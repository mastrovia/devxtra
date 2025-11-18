'use client';

import { Heading } from '@/components/common/heading';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function FaqsSection({ id }: { id?: string }) {
  const data = {
    title: 'Still Have Questions?',
    subtitle: 'Everything you need to know about DevXtra',
    tag: 'FAQs',
    questions: [
      {
        title: 'Do I need prior coding experience?',
        answer:
          "No prior experience required! DevXtra starts with fundamentals and builds your skills progressively. Whether you're a complete beginner or switching careers, our structured curriculum takes you from basics to advanced concepts step by step.",
      },
      {
        title: "What if I don't get freelance work or results?",
        answer:
          'We provide continuous support until you land your first project. Our mentors help with portfolio building, client outreach, and interview preparation. Plus, we share real project opportunities from our network.',
      },
      {
        title: 'Can I earn while learning at DevXtra?',
        answer:
          "Absolutely! Many students start earning within 2-3 months. You'll work on real client projects, build a strong portfolio, and learn proven freelancing strategies. We'll guide you on pricing, proposals, and client communication.",
      },
      {
        title: 'Is there any placement or job assistance?',
        answer:
          'Yes! We provide job referrals, resume reviews, mock interviews, and direct connections to hiring companies. Our alumni network includes developers at top startups and product companies.',
      },
      {
        title: 'What makes DevXtra different from YouTube or other courses?',
        answer:
          'Unlike passive learning, DevXtra offers personalized mentorship, real project experience, peer collaboration, and accountability. You get immediate doubt resolution, career guidance, and a supportive community - not just videos.',
      },
      {
        title: 'Is this suitable for working professionals?',
        answer:
          'Definitely! Many of our students are working professionals looking to upskill or switch careers. We offer evening and weekend batches, flexible schedules, and self-paced learning options.',
      },
    ],
  };

  return (
    <section className="section-cont flex flex-col gap-10" id={id}>
      <Heading tag={data.tag} title={data.title} subtitle={data.subtitle} />
      <div className="mx-auto w-full max-w-3xl">
        <Accordion type="single" className="w-full">
          {data.questions.map((question, idx) => (
            <AccordionItem key={question.title} value={`item-${idx}`} className="px-4 md:px-6">
              <AccordionTrigger value={`item-${idx}`} className="text-base sm:text-lg font-semibold text-primary">
                {question.title}
              </AccordionTrigger>
              <AccordionContent value={`item-${idx}`} className="text-sm sm:text-base text-muted-foreground">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
