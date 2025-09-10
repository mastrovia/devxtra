import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
};

const ButtonBase: FC<ButtonProps> = ({ children, href, ...props }) => {
  const ButtonComp = (
    <button {...props} className={cn("cursor-pointer", props.className)}>
      {children}
    </button>
  );

  return href ? <Link href={href}>{ButtonComp}</Link> : ButtonComp;
};

export default ButtonBase;

export const ButtonStyled: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonBase
      {...props}
      className={cn(
        "inline-block bg-primary px-5 py-4 font-bold text-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
    >
      {children}
    </ButtonBase>
  );
};
