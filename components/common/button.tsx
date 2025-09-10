import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
  classnamefora?: AnchorHTMLAttributes<HTMLAnchorElement>["className"];
};

const ButtonBase: FC<ButtonProps> = ({ children, href, ...props }) => {
  const ButtonComp = (
    <button {...props} className={cn("cursor-pointer", props.className)}>
      {children}
    </button>
  );

  return href ? (
    <Link href={href} className={cn(props.classnamefora)}>
      {ButtonComp}
    </Link>
  ) : (
    ButtonComp
  );
};

export default ButtonBase;

export const ButtonStyled: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonBase
      {...props}
      className={cn(
        "inline-block bg-primary px-4 py-2 font-bold text-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50 rounded-xl whitespace-nowrap",
        props.className
      )}
    >
      {children}
    </ButtonBase>
  );
};
