import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "peer hover:cursor-pointer px-2 py-1 rounded-lg hover:bg-hover hover:px-3 duration-500 ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
