import { twMerge } from "tailwind-merge";
import RollingNumber from "./RollingNumber";

type CardProps = {
  className?: string;
  card: {
    title: string;
    number: number;
    perc: number;
  };
};

const Card = ({ className, card }: CardProps) => {
  return (
    <div
      className={twMerge(
        "min-w-[160px] sm:min-w-[200px] flex flex-col gap-2 p-4 sm:p-6 rounded-2xl text-black cursor-default ",
        className
      )}
    >
      <h1 className='rounded-lg hover:px-1 duration-500 cursor-default'>
        {card.title}
      </h1>
      <div className='flex items-center justify-between gap-y-2'>
        {/* NUMBER  */}
        <div
          className={`flex h-9 overflow-y-hidden text-lg sm:text-2xl font-semibold leading-9 sm:leading-9`}
        >
          {card.number
            .toLocaleString()
            .split("")
            .map((digit, i) =>
              digit === "," ? (
                <span key={i}>{digit}</span>
              ) : (
                <RollingNumber key={i} digit={+digit} />
              )
            )}
        </div>

        {/* PERCENTAGE % */}
        <div className='grow flex justify-end gap-2 rounded-lg'>
          <span className='text-xs hover:px-1 duration-500'>
            {card.perc > 0 ? "+" : null}
            {card.perc}%
          </span>
          {card.perc > 0 ? (
            <img src='ArrowRise.svg' alt='' />
          ) : (
            <img src='ArrowFall.svg' alt='' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
