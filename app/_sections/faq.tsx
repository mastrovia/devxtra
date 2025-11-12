import { Heading } from '@/components/common/heading';

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
        title: 'How much time commitment is required per week?',
        answer:
          'We recommend 10-15 hours per week for optimal progress. The program is flexible - you can learn at your own pace. Weekend batches and evening sessions are available for working professionals.',
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
        title: 'Can I pay in installments?',
        answer:
          'Yes, flexible payment options are available. We also offer an "Earn While You Learn" model where you can defer payment until you land your first project. Talk to us about what works for you.',
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
      <ul className="mx-auto flex w-full grid-cols-1 md:grid-cols-2 flex-col place-content-start items-start gap-6 self-stretch md:grid lg:gap-8 lg:px-12">
        {data.questions.map((question) => (
          <li
            key={question.title}
            className="flex flex-col gap-2 p-5 rounded-xl bg-accent/50 border border-border hover:border-[--accent-blue]/50 transition-all duration-300 hover:shadow-md"
          >
            <p className="font-semibold leading-relaxed text-base sm:text-lg text-primary">{question.title}</p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
