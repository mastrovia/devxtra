import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type HeadingProps = {
  tag?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  title?: string;
};

export function Tag({ className, children, asChild, ...props }: React.AllHTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      className={clsx(
        "flex min-h-7 items-center justify-center gap-2 rounded-full bg-secondary px-3.5 pb-px text-sm font-medium text-tertiary md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Heading({ tag, subtitle, className, ...props }: HeadingProps) {
  return (
    <div className={"flex items-center flex-col gap-3"}>
      {tag ? <Tag>{tag}</Tag> : null}
      <div
        className={cn(
          "flex max-w-[800px] flex-col justify-center gap-1",
          "[&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl"
        )}
      >
        <h1 {...props} className={cn("text-center")}>
          {props?.title}
        </h1>
      </div>
      {subtitle ? <p className="max-w-screen-md text-pretty font-light text-tertiary text-center text-lg">{subtitle}</p> : null}
    </div>
  );
}
