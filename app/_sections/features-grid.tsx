import { ButtonStyled } from "@/components/common/button";
import { Heading } from "@/components/common/heading";
import Image from "next/image";

export default function FeaturesGridSection() {
  const featuresGridData = {
    actions: [
      {
        _id: "1",
        label: "Transform your career today",
        href: "/signup",
      },
    ],
    list: [
      {
        _id: "1",
        title: "Sprint Planning",
        description: "Plan and execute project tasks efficiently within iterative sprint cycles.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/P4yggRHkqB8uRH587STUr/frameicon.svg",
        },
      },
      {
        _id: "2",
        title: "Kanban Boards",
        description: "Visualize project workflow and track task progress with customizable Kanban boards.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/SCkaU2WEu53qSBWsNVQO4/frameicon-1.svg",
        },
      },
      {
        _id: "3",
        title: "Task Prioritization",
        description: "Prioritize tasks based on urgency and importance to ensure efficient use of resources.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/WIADTrhMDDCGZUakwbctI/frameicon-2.svg",
        },
      },
      {
        _id: "4",
        title: "Collaborative Task Boards",
        description: "Collaboratively manage tasks and assignments in real-time, fostering teamwork and accountability.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/eRZEKnuCUPMOThfCOtVMw/frameicon-3.svg",
        },
      },
      {
        _id: "5",
        title: "Backlog Management",
        description: "Maintain a backlog of tasks and user stories, ensuring a steady flow of work for your team.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/12XqbjYT6n4Nn-G24Wllb/frameicon-4.svg",
        },
      },
      {
        _id: "6",
        title: "Burndown Charts",
        description: "Monitor project progress and identify potential bottlenecks with easy-to-read burndown charts.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/yxVz9gspGHr_vDrQM-mC2/frameicon-5.svg",
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-6 flex flex-col gap-10">
      <Heading
        tag="Management"
        title="Agile Project Planning"
        subtitle="Drive project success with agile project management capabilities tailored for small teams focused on rapid product development."
      />
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {featuresGridData.list.map(({ _id, title, description, icon }) => (
          <article
            key={_id}
            className="flex flex-col gap-4 rounded-lg border border-border p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
          >
            <figure className="flex size-9 items-center justify-center rounded-full border border-border p-2">
              <Image width={18} height={18} src={icon.url} alt="" className="dark:invert" />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-pretty text-[--text-secondary] dark:text-[--dark-text-secondary]">{description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 md:order-3">
        {featuresGridData.actions?.map((action) => (
          <ButtonStyled className="rounded-xl" key={action._id} href={action.href}>
            {action.label}
          </ButtonStyled>
        ))}
      </div>
    </section>
  );
}
