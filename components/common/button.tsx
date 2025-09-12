import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
  classnamefora?: AnchorHTMLAttributes<HTMLAnchorElement>['className'];
};

const ButtonBase: FC<ButtonProps> = ({ children, href, ...props }) => {
  const ButtonComp = (
    <button {...props} className={cn('cursor-pointer', props.className)}>
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

export const ButtonStyled: FC<ButtonProps & { variant?: 'default' | 'glass' }> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <ButtonBase
      {...props}
      className={cn(
        'inline-block bg-primary px-4 py-2 font-bold text-accent disabled:text-muted transition-colors disabled:cursor-not-allowed disabled:bg-primary/50 rounded-md whitespace-nowrap',
        variant == 'glass' ? 'bg-primary/10 text-primary border backdrop-blur-2xl' : '',
        props.className
      )}
    >
      {children}
    </ButtonBase>
  );
};
