import { ReactNode } from "react";
import TopNav from "./topNav/TopNav";
import RightNav from "./RightNav";
import LeftNav from "./leftNav/LeftNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden flex'>
      <LeftNav className=' bg-main-bg h-screen overflow-y-hidden hover:overflow-y-auto fixed top-0 left-0 z-10' />
      <div className='grow flex items-center flex-col lg:pl-[212px] xl:pr-[280px] '>
        <TopNav className='fixed bottom-0 sm:sticky w-full sm:top-0 z-20 bg-main-bg' />
        <div className='flex-1 pt-2 pb-20  px-2 sm:p-7 '>{children}</div>
      </div>
      <RightNav className='bg-main-bg h-screen overflow-y-hidden hover:overflow-y-auto fixed top-0 right-0 z-10' />
    </div>
  );
};

export default Layout;
