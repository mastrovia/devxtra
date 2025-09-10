import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CompaniesSection() {
  const companiesSection = {
    subtitle: "Join 4,000+ companies already growing",
    companies: [
      {
        _id: "company1",
        title: "ProLine",
        image: "https://assets.basehub.com/fa068a12/oXE9rw_Z1LUOAZGIy26Xv/logocompany6.svg",
      },
      {
        _id: "company2",
        title: "Hues",
        image: "https://assets.basehub.com/fa068a12/znAQM6z290JP21p-qyZXG/logocompany.svg",
      },
      {
        _id: "company3",
        title: "Greenish",
        image: "https://assets.basehub.com/fa068a12/l59ewb-4QkOUj6-Wjiqsa/logocompany-1.svg",
      },
      {
        _id: "company4",
        title: "Cloud",
        image: "https://assets.basehub.com/fa068a12/u1uMzl8OgIqZMFc9cgXuI/logocompany-2.svg",
      },
      {
        _id: "company5",
        title: "Volume",
        image: "https://assets.basehub.com/fa068a12/d3iMafbTPYxVPQpJ6ONEm/logocompany-3.svg",
      },
      {
        _id: "company6",
        title: "PinPoint",
        image: "https://assets.basehub.com/fa068a12/skqkUDVY7YAfOIaQqRUDK/logocompany-4.svg",
      },
    ],
  };

  return (
    <section className="flex flex-col gap-10 relative">
      <h2 className="text-center tracking-tight text-[--dark-text-tertiary] opacity-50">{companiesSection.subtitle}</h2>
      <div className="no-scrollbar flex max-w-full justify-center overflow-hidden">
        <div className="bg-linear-to-r from-background pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div className="bg-linear-to-l from-background pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div className={cn("flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12")}>
          {companiesSection.companies.map((company) => (
            <figure key={company.image ?? company.title} className="flex h-16 items-center px-2 py-3 lg:p-4">
              <Image src={company.image} width={32} height={20} alt={company.title} className="w-24 lg:w-32" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
