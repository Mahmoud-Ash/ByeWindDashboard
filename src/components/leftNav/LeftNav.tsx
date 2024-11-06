import { LeftMenuList } from "../../lib/constants";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import { useState } from "react";

const LeftNav = ({ className }: { className?: string }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <input
        type='checkbox'
        id='checkL'
        className='peer/l hidden'
        aria-label='hidden'
        onChange={() => setExpanded(prev => !prev)}
      />
      <aside
        className={twMerge(
          `lg:flex flex-col gap-2 px-4 py-4 border-r border-hover duration-300
          hidden
          `,
          className,
          !expanded ? "w-20" : "w-[212px]"
        )}
      >
        {/* USER SECTION */}
        <div className='flex flex-col items-start gap-1 pb-3'>
          {/* USER INFO */}
          <div className='flex gap-2 p-2 rounded-lg '>
            <i className='group rounded-full h-6 w-6 overflow-hidden relative'>
              <img
                src='Frame.png'
                alt=''
                className='group-hover:scale-110 duration-500'
              />
              <div className='h-full w-full absolute top-0 left-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 duration-500'></div>
            </i>
            <span
              className={`hover:px-1 duration-300 cursor-default overflow-hidden ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              ByeWind
            </span>
          </div>
          <hr className='py-[2px] w-full opacity-0' />

          {/* USER TABS */}

          <div
            className={`flex flex-col duration-400 overflow-hidden ${
              expanded ? "gap-1 pt-1 h-full w-full" : "gap-0 pt-0 h-0 w-0"
            }`}
          >
            <div className={`flex  rounded-lg  gap-2`}>
              <Button className='text-soft'>Favorites</Button>
              <Button className='text-softer'>Recently</Button>
            </div>
            <div className={`flex items-center rounded-xl gap-1 p-2`}>
              <svg
                width='6'
                height='6'
                viewBox='0 0 6 6'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z'
                  fill='currentColor'
                  fillOpacity='0.2'
                />
              </svg>
              <Button className='hover:bg-transparent'>Overview</Button>
            </div>
            <div className='flex items-center gap-1 p-2 rounded-xl'>
              <svg
                width='6'
                height='6'
                viewBox='0 0 6 6'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z'
                  fill='currentColor'
                  fillOpacity='0.2'
                />
              </svg>
              <Button className='hover:bg-transparent'>Projects</Button>
            </div>
          </div>
        </div>

        {/* MENU LIST SECTION */}
        {LeftMenuList.map(list => (
          <div
            key={list.name}
            className={`flex flex-col duration-300 ${
              expanded ? "pb-3 gap-1" : "pb-0 gap-0"
            }`}
          >
            <h1
              className={`rounded-lg text-soft duration-300 overflow-hidden capitalize ${
                expanded ? "w-full px-3 py-1 h-full" : "w-0 h-0 px-0 py-0"
              }`}
            >
              {list.name}
            </h1>
            {list.items.map(listItem => (
              <button
                key={listItem.id}
                className={`flex items-center rounded-xl hover:bg-hover-soft group ${
                  expanded ? "gap-1 p-2" : "p-3 gap-0 justify-center size-12 "
                }`}
              >
                <svg
                  className={`text-softer hover:text-main-txt duration-300 ${
                    !expanded && "size-0"
                  }`}
                  width='16'
                  height='16'
                  // viewBox='0 0 16 16'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z'
                    fill='currentColor'
                  />
                </svg>
                <div
                  className={`flex items-center rounded-lg  ${
                    expanded ? "gap-2" : "gap-0"
                  }`}
                >
                  {listItem.icon}
                  <span
                    className={`flex-1 text-left hover:px-1 duration-300 whitespace-nowrap overflow-hidden ${
                      expanded ? "w-20" : "w-0"
                    }`}
                  >
                    {listItem.title}
                  </span>

                  {/* TOOLTIP  */}
                  {!expanded && (
                    <div className='fixed z-50 bg-black/80 text-white text-xs backdrop-blur pointer-events-none duration-300 opacity-0 left-20 rounded-lg px-2 py-1 group-hover:opacity-100 '>
                      {listItem.title}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}

        {/* lOGO sECTION */}
        <Logo
          expanded={expanded}
          className='mt-auto flex justify-center items-center p-2 rounded-lg backdrop-blur-2xl'
        />
      </aside>
    </>
  );
};

export default LeftNav;
