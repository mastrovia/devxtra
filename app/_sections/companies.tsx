import LogoLoop from '@/components/animations/logo-loop';

export default function TechStacksSection({ id }: { id?: string }) {
  const companiesSection = {
    subtitle: 'Join our growing community of forward-thinking devs',
    companies: [
      {
        _id: '1',
        title: 'JavaScript ',
        image: '/tech-stacks/js.png',
      },
      {
        _id: '2',
        title: 'GitHub',
        image: '/tech-stacks/github.png',
      },
      {
        _id: '3',
        title: 'MongoDB',
        image: '/tech-stacks/mongodb.png',
      },
      {
        _id: '4',
        title: 'NodeJS',
        image: '/tech-stacks/nodejs.png',
      },
      {
        _id: '5',
        title: 'ReactJS',
        image: '/tech-stacks/reactjs.png',
      },
      {
        _id: '6',
        title: 'AWS',
        image: '/tech-stacks/aws.png',
      },
    ],
  };

  return (
    <section className="flex flex-col gap-10 relative animate-fade-in delay-300" id={id}>
      <h2 className="text-center tracking-tight opacity-70 px-22 font-medium text-lg">Powering Next-Gen Applications with Modern Tech</h2>
      <LogoLoop
        logos={companiesSection.companies.map(d => ({ src: d.image, alt: d.title }))}
        className='grayscale opacity-75 invert dark:invert-0'
        logoHeight={35}
        speed={75}
        scaleOnHover={true}
        fadeOut={true}
      />
    </section>
    //   <div className="no-scrollbar flex max-w-full justify-center overflow-hidden">
    //     {/* <div className="bg-linear-to-r from-background pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
    //     <div className="bg-linear-to-l from-background pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" /> */}
    //     <div className={cn('flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12')}>
    //       {companiesSection.companies.map((company) => (
    //         <figure key={company.image ?? company.title} className="flex h-16 items-center px-2 py-3 lg:p-4">
    //           <Image
    //             src={company.image}
    //             width={100}
    //             height={20}
    //             alt={company.title}
    //             className="lg:w-32 object-scale-down invert grayscale dark:invert-0 h-25 opacity-50"
    //           />
    //         </figure>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
