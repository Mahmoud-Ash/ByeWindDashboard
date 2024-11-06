import { twMerge } from "tailwind-merge";
import { ButtonProps } from "../Button";

type TooltipButtonProps = ButtonProps & {
  tooltip: string;
  shortCut: string;
  htmlFor?: string;
  className?: string;
};

const TooltipButton = ({
  children,
  tooltip,
  shortCut,
  htmlFor,
  className,
  onClick,
}: TooltipButtonProps) => {
  return (
    <div
      className={twMerge(
        "relative flex flex-col items-center justify-between gap-1 p-1 rounded-lg",
        className
      )}
    >
      {/* BUTTON SECTION */}
      <label
        htmlFor={htmlFor}
        onClick={onClick}
        className='peer cursor-pointer p-1 rounded-lg hover:bg-hover duration-500'
      >
        {children}
      </label>

      {/* TOOLTIP SECTION */}
      <div className='absolute  items-center gap-1 -bottom-[30px] py-1 px-2 bg-black/80  backdrop-blur-2xl rounded-lg text-xs pointer-events-none opacity-0 whitespace-nowrap peer-hover:opacity-100 peer-hover:flex duration-500 '>
        <p className='flex items-center gap-2 rounded-lg'>
          <span className='text-white capitalize'>{tooltip}</span>
          <span className='text-white/40 uppercase'>{shortCut}</span>
        </p>
      </div>
    </div>
  );
};

export default TooltipButton;
