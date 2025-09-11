import { Heading } from "@/components/common/heading";

export default function FaqsSection() {
  const data = {
    title: "Frequently asked questions",
    subtitle: "Advice and answers from our team.",
    tag: "FAQs",
    questions: [
      {
        title: "What industries can benefit from your AI solutions?",
        answer: "Our AI solutions are applicable across various industries, including healthcare, finance, retail, and manufacturing.",
      },
      {
        title: "How do you ensure data privacy and security?",
        answer: "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
      },
      {
        title: "Can your AI solutions be customized to fit specific business needs?",
        answer: "Automate repetitive tasks and free up valuable time for strategic initiatives.",
      },
      {
        title: "Do you provide ongoing support and maintenance for your AI solutions?",
        answer: "Absolutely, we offer comprehensive support and maintenance services to ensure the smooth operation of our AI solutions.",
      },
      {
        title: "How can I get started with your AI solutions?",
        answer: "Simply reach out to our team to schedule a consultation and explore how our AI solutions can benefit your business.",
      },
    ],
  };

  return (
    <section className="container mx-auto px-5 flex flex-col gap-10">
      <Heading tag={data.tag} title={data.title} subtitle={data.subtitle} />
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {data.questions.map((question) => (
          <li key={question.title} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">{question.title}</p>
            <p className="text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base">{question.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
