import { ButtonStyled } from "@/components/common/button";
import { Heading } from "@/components/common/heading";
import Image from "next/image";

export default function FeaturesSideBySideSection() {
  const data = {
    heading: {
      tag: "Productivity",
      title: "Supercharge Team Productivity",
      subtitle: "Keep your team focused and productive as they collaborate on building and shipping products swiftly.",
    },
    items: [
      {
        title: "Real-time Messaging",
        subtitle:
          "Instantly communicate with your team, ensuring swift decision-making and seamless collaboration on project tasks and updates.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
        },
      },
      {
        title: "Task Management",
        subtitle:
          "Organize and prioritize tasks effectively, assigning responsibilities and tracking progress to keep projects on schedule and within scope.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
        },
      },
      {
        title: "File Sharing",
        subtitle:
          "Share documents, images, and other files effortlessly within your team, enabling easy access to project resources and materials.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
        },
      },
      {
        title: "Real-time Insights",
        subtitle: "Gain actionable insights instantly with real-time data analysis and visualization.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
        },
      },
      {
        title: "Smart Notifications",
        subtitle:
          "Stay informed about project updates and important discussions without being overwhelmed, thanks to customizable notification settings.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
        },
      },
      {
        title: "Team Analytics",
        subtitle:
          "Gain insights into team performance and communication trends with built-in analytics, empowering you to optimize workflows and enhance productivity.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/F8riNXVtoCEr_slSKlQKE/message-circle.svg",
        },
      },
    ],
  };

  return (
    <section className="relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28 flex flex-col gap-5">
      <div className="relative top-0 shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
          <Heading
            classnamea="hidden lg:flex"
            align="start"
            tag={data.heading.tag}
            title={data.heading.title}
            subtitle={data.heading.subtitle}
          />
          <Heading
            classnamea="lg:hidden flex"
            align="center"
            tag={data.heading.tag}
            title={data.heading.title}
            subtitle={data.heading.subtitle}
          />
          <div className="flex justify-center lg:justify-start">
            <ButtonStyled>Join now</ButtonStyled>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {data.items.map(({ title, icon, subtitle }) => (
            <article
              key={title}
              className="flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] p-4 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:w-full lg:flex-row lg:p-5"
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[--surface-tertiary] p-3 dark:bg-[--dark-surface-tertiary]">
                <Image alt={icon.alt ?? title} className="dark:invert" height={24} src={icon.url} width={24} />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{title}</h5>
                <p className="text-pretty text-[--text-tertiary] dark:text-[--dark-text-tertiary]">{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
