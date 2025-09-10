import Link from "next/link";
import { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
};

const ButtonBase: FC<ButtonProps> = ({ children, href, ...props }) => {
  const ButtonComp = <button {...props}>{children}</button>;

  return href ? <Link href={href}>{ButtonComp}</Link> : ButtonComp;
};

export default ButtonBase;

export const ButtonStyled: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonBase
      className="inline-block bg-primary px-5 py-2 text-sm font-medium text-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
