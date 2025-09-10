import { Heading } from "@/components/common/heading";
import Image from "next/image";

export default function FeaturesGridSection() {
  const featuresGridList = [
    {
      _id: "i3JMHg0CJdbc7ONT9NSpq",
      title: "Sprint Planning",
      description: "Plan and execute project tasks efficiently within iterative sprint cycles.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/P4yggRHkqB8uRH587STUr/frameicon.svg",
      },
    },
    {
      _id: "xOycqaCztvtLl6pRgm9fQ",
      title: "Kanban Boards",
      description: "Visualize project workflow and track task progress with customizable Kanban boards.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/SCkaU2WEu53qSBWsNVQO4/frameicon-1.svg",
      },
    },
    {
      _id: "GPNRiGkzZ_pzitrZp7TI6",
      title: "Task Prioritization",
      description: "Prioritize tasks based on urgency and importance to ensure efficient use of resources.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/WIADTrhMDDCGZUakwbctI/frameicon-2.svg",
      },
    },
    {
      _id: "z5XvRhG0gnAR2cjUkYY93",
      title: "Collaborative Task Boards",
      description: "Collaboratively manage tasks and assignments in real-time, fostering teamwork and accountability.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/eRZEKnuCUPMOThfCOtVMw/frameicon-3.svg",
      },
    },
    {
      _id: "lBsgQ48dSHL1ARtbtXqQU",
      title: "Backlog Management",
      description: "Maintain a backlog of tasks and user stories, ensuring a steady flow of work for your team.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/12XqbjYT6n4Nn-G24Wllb/frameicon-4.svg",
      },
    },
    {
      _id: "al8lV_rss6F54V-ZiMwZi",
      title: "Burndown Charts",
      description: "Monitor project progress and identify potential bottlenecks with easy-to-read burndown charts.",
      icon: {
        alt: null,
        url: "https://assets.basehub.com/fa068a12/yxVz9gspGHr_vDrQM-mC2/frameicon-5.svg",
      },
    },
  ];

  return (
    <section className="container mx-auto px-6 flex flex-col gap-10">
      <Heading
        tag="Management"
        title="Agile Project Planning"
        subtitle="Drive project success with agile project management capabilities tailored for small teams focused on rapid product development."
      />
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {featuresGridList.map(({ _id, title, description, icon }) => (
          <article
            key={_id}
            className="flex flex-col gap-4 rounded-lg border border-muted p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
          >
            <figure className="flex size-9 items-center justify-center rounded-full border border-muted p-2">
              <Image width={18} height={18} src={icon.url} alt="" className="dark:invert" />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-pretty text-[--text-secondary] dark:text-[--dark-text-secondary]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
