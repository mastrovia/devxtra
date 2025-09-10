import { Heading } from "@/components/common/heading";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function FeaturesListSection() {
  const features = [
    {
      title: "Real-time Messaging",
      description:
        "Engage in instant conversations with team members through our real-time messaging platform, ensuring seamless communication and quick responses.",
      characteristics: {
        items: [
          { title: "Instant message delivery" },
          { title: "Read receipts and typing indicators" },
          { title: "Group chats and direct messages" },
        ],
      },
      image: {
        dark: "https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&quality=100",
        alt: "Real-time Messaging Feature",
      },
    },
    {
      title: "Real-time Messaging 3",
      description:
        "Engage in instant conversations with team members through our real-time messaging platform, ensuring seamless communication and quick responses.",
      characteristics: {
        items: [
          { title: "Instant message delivery" },
          { title: "Read receipts and typing indicators" },
          { title: "Group chats and direct messages" },
        ],
      },
      image: {
        dark: "https://assets.basehub.com/fa068a12/LjqmKEgcHqPTWDXCrY33M/features-streamlined-team-communication-integrated-task-management-(dark-mode)3x.jpg?format=auto&quality=100",
        alt: "Real-time Messaging Feature",
      },
    },

    {
      title: "Real-time Messaging 2",
      description:
        "Engage in instant conversations with team members through our real-time messaging platform, ensuring seamless communication and quick responses.",
      characteristics: {
        items: [
          { title: "Instant message delivery" },
          { title: "Read receipts and typing indicators" },
          { title: "Group chats and direct messages" },
        ],
      },
      image: {
        dark: "https://assets.basehub.com/fa068a12/rAkAivkkRD3eW9FOF9wmN/features-streamlined-team-communication-secure-communication-channels-(dark-mode)3x.jpg?format=auto&quality=100",
        alt: "Real-time Messaging Feature",
      },
    },
  ];

  return (
    <section className="container mx-auto px-6 flex flex-col gap-10">
      <Heading
        tag="Communication"
        title="Enhanced Team Communication"
        subtitle="Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking."
      />
      <div className="flex flex-col gap-6 items-center">
        {features.map(({ image, ...item }) => (
          <article
            key={item.title}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-[var(--border)] bg-muted p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image src={image.dark} alt={image.alt} width={560} height={374} className="rounded" />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium md:text-3xl">{item.title}</h5>
                <p className="font-normal text-tertiary md:text-lg">{item.description}</p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ title }) => (
                  <li key={title} className="flex items-center gap-4 font-normal text-tertiary">
                    <span className="flex size-6 p-1.5 items-center justify-center rounded-full bg-primary/20">
                      <CheckIcon className="text-foreground" />
                    </span>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
