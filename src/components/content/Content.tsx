import { cards } from "../../lib/constants";
import CustomBarChart from "./CustomBarChart";
import Card from "./card/Card";
import Doughnut from "./Doughnut";
import VBar from "./VBar";
import CustomLineChart from "./CustomLineChart";
import useGetDeviceTraffic from "../../hooks/useGetDeviceTraffic";
import useGetLocationTraffic from "../../hooks/useGetLocationTraffic";
import useGetMarketing from "../../hooks/useGetMarketing";

const Content = () => {
  const miniBar = useGetDeviceTraffic();
  const megaBar = useGetMarketing();
  const doughnut = useGetLocationTraffic();
  return (
    <div className='flex flex-col gap-2 sm:gap-4 '>
      {/* HEADER  */}
      <div className='flex justify-between'>
        <h1 className='px-2 py-1 rounded-lg font-semibold'>Overview</h1>
        <div className='group flex items-center justify-center gap-1 px-2 py-1 rounded-lg cursor-default hover:bg-hover'>
          <span className='rounded-lg text-xs group-hover:px-1 duration-500'>
            Today
          </span>
          <i className='w-4 h-4 flex items-center justify-center'>
            <svg
              width='10'
              height='6'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z'
                fill='currentcolor'
                fillOpacity='0.4'
              />
            </svg>
          </i>
        </div>
      </div>

      {/* BODY  */}
      <div className='grid grid-cols-2 md:grid-cols-8 auto-rows-auto gap-x-2 gap-y-4 md:gap-7'>
        {/* CARDS SECTION  */}
        {cards.map((card, i) => (
          <Card
            key={card.id}
            card={card}
            className={`col-span-1 md:col-span-4 ${
              i % 2 ? "bg-bg3" : "bg-bg4"
            }`}
          />
        ))}
        {/* LINE CHART & VBAR  */}
        <CustomLineChart className=' col-span-2 md:col-span-5 lg:col-span-6 xl:col-span-5 2xl:col-span-6  ' />
        <VBar className='col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-3 2xl:col-span-2' />

        {/* MINI BAR CHART */}
        <div className='col-span-2  md:col-span-4  bg-bg2 h-[280px] 2xl:min-w-[400px] flex flex-col gap-4 p-6 rounded-2xl'>
          <h1 className='rounded-lg font-semibold cursor-default hover:px-1 duration-500'>
            Traffic by Device
          </h1>
          <CustomBarChart
            data={miniBar.data}
            isLoading={miniBar.isLoading}
            className=''
          />
        </div>

        {/* DOUGHNUT CHART  */}
        <div className='col-span-2 md:col-span-4 bg-bg2 h-[280px] 2xl:min-w-[400px] flex flex-col gap-4 p-6 rounded-2xl'>
          <h1 className='rounded-lg font-semibold cursor-default hover:px-1 duration-500'>
            Traffic by Location
          </h1>
          <Doughnut
            data={doughnut.data}
            isLoading={doughnut.isLoading}
            className=''
          />
        </div>

        {/* MEGA BAR CHART  */}
        <div className=' col-span-2 md:col-span-8 bg-bg2 h-[280px] 2xl:min-w-[800px] sm:flex flex-col gap-4 p-6 rounded-2xl'>
          <h1 className='rounded-lg font-semibold cursor-default hover:px-1 duration-500'>
            Marketing & SEO
          </h1>
          <CustomBarChart
            data={megaBar.data}
            isLoading={megaBar.isLoading}
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
