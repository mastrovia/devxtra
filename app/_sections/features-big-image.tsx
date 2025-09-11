import { Heading } from "@/components/common/heading";
import Image from "next/image";

export default function FeaturesBigImageSection() {
  const featuresBigImage = {
    heading: {
      tag: "Collaboration",
      title: "Seamless Collaboration, Enhanced Productivity",
      subtitle:
        "Empower your team with integrated tools for file sharing, task management, and real-time collaboration, ensuring smooth project workflows from start to finish.",
    },
    image: {
      url: "https://assets.basehub.com/fa068a12/0wXkzA13r5ef3JtyGvTgy/features-seamless-collaboration-enhanced-productivity2x.png?format=auto&quality=100",
      alt: "",
    },
    items: [
      {
        title: "Real-time Messaging",
        description: "Instantly communicate and collaborate with team members, keeping everyone aligned and informed.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/P4yggRHkqB8uRH587STUr/frameicon.svg",
        },
      },
      {
        title: "File Sharing",
        description: "Share documents, images, and files effortlessly within your team, ensuring easy access to important resources.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/SCkaU2WEu53qSBWsNVQO4/frameicon-1.svg",
        },
      },
      {
        title: "Task Management",
        description:
          "Organize tasks, assign responsibilities, and track progress in one centralized platform, promoting accountability and efficiency.",
        icon: {
          alt: null,
          url: "https://assets.basehub.com/fa068a12/WIADTrhMDDCGZUakwbctI/frameicon-2.svg",
        },
      },
    ],
  };

  return (
    <section className="flex flex-col gap-10 relative container mx-auto px-5">
      <Heading tag={featuresBigImage.heading.tag} title={featuresBigImage.heading.title} subtitle={featuresBigImage.heading.subtitle} />
      <div className="flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16">
        {featuresBigImage.items.map(({ title, description, icon }) => (
          <article key={title} className="flex flex-col gap-4">
            <figure className="flex size-9 items-center justify-center rounded-full border p-2">
              <Image alt={icon.alt ?? title} className="dark:invert" height={18} src={icon.url} width={18} />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </article>
        ))}
      </div>
      {/* <Image
        src={featuresBigImage.image.url}
        height={600}
        width={1216}
        className="block rounded-xl border md:order-3 md:w-full"
        alt={featuresBigImage.image.alt}
      /> */}
      <iframe
        height={600}
        // width={1216}
        src="https://www.youtube.com/embed/idEAABFzpfg?si=3Hk0pvBSWT6ByU_x&amp;controls=0"
        // src="https://www.youtube.com/embed/71-Mo83mHQw?si=COGHRfk3TMfak3Xk&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="block rounded-xl border md:order-3 md:w-full"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </section>
  );
}
