import { Heading } from '@/components/common/heading';

export default function FaqsSection({ id }: { id?: string }) {
  const data = {
    title: 'Frequently asked questions',
    subtitle: 'Advice and answers from our team.',
    tag: 'FAQs',
    questions: [
      {
        title: 'What will I learn in the DevXtra program?',
        answer:
          'At DevXtra, you’ll gain fullstack development skills from backend and database fundamentals to frontend and mobile app development. You’ll also work on real-world startup-level projects, explore AI-powered coding tools, and learn teamwork, freelancing, and networking skills to prepare for professional and entrepreneurial success.',
      },
      {
        title: 'Can I earn while learning at DevXtra?',
        answer:
          'Yes! Our program lets you work on client projects and startup-inspired assignments, helping you earn while gaining practical coding experience. You’ll build a portfolio, improve your personal branding, and develop freelancing skills along the way.',
      },
      {
        title: 'Do I need prior coding experience to join the course?',
        answer:
          'No prior experience is required. DevXtra’s  course structure starts with foundations like backend, database, and frontend development. Each phase builds your skills progressively, preparing you for mobile apps, enterprise projects, and real client work.',
      },
      {
        title: 'Will I learn AI and modern tools in this course?',
        answer:
          'Absolutely! DevXtra teaches you how to leverage AI tools for coding, automation, and rapid prototyping. You’ll also explore no-code/low-code platforms, helping you build projects faster and stay ahead in the modern tech landscape.',
      },
      {
        title: 'Will I get real-world exposure and teamwork experience?',
        answer:
          'Definitely! You’ll collaborate with peers on projects, experience real client workflows, and develop teamwork skills that mirror professional environments. This prepares you for both corporate jobs and startup ventures.',
      },
      {
        title: 'Is this course suitable for aspiring entrepreneurs?',
        answer:
          'Yes! DevXtra helps you turn your ideas into real projects, test them with real users, and learn how to grow them step by step. You’ll gain an entrepreneurial mindset, practical skills, and mentorship to build startup-ready products.',
      },
    ],
  };

  return (
    <section className="container mx-auto px-5 flex flex-col gap-10" id={id}>
      <Heading tag={data.tag} title={data.title} subtitle={data.subtitle} />
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {data.questions.map((question) => (
          <li key={question.title} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">{question.title}</p>
            <p className="text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base">
              {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
