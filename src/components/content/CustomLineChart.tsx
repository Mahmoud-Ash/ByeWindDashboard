import { useState } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";
import { twMerge } from "tailwind-merge";
import { useDarkMode } from "../../contexts/themeContext/ThemeContext";
import useGetUserStats from "../../hooks/useGetUserStats";
import Loading from "./Loading";

const tabs = ["total users", "total projects", "operating status"];

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
  }[];
};
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return <p className='text-xl'>{payload[0].value.toLocaleString()}</p>;
  }
  return null;
};

const CustomLineChart = ({ className }: { className: string }) => {
  const { isDark } = useDarkMode();
  const [selected, setselected] = useState("total users");
  const { data, isLoading } = useGetUserStats();

  return (
    <div
      className={twMerge(
        "bg-bg2 h-[240px] sm:h-[330px] 2xl:min-w-[662px] flex flex-col gap-4 p-6 rounded-xl ",
        className
      )}
    >
      {/* HEADER SECTION  */}
      <div className='flex w-full items-center gap-3 sm:gap-4 rounded-lg'>
        {tabs.map(tab => (
          <span
            key={tab}
            onClick={() => setselected(tab)}
            className={` rounded-lg  hover:text-brand capitalize cursor-pointer transition-colors ${
              selected === tab
                ? "font-semibold text-brand cursor-default"
                : "text-soft"
            } `}
          >
            {tab}
          </span>
        ))}
        <span className='hidden sm:block h-full w-px bg-softer rounded-lg'></span>
        <div className='hidden sm:flex items-center pl-1 pr-2 py-0.5 rounded-lg'>
          <span className='h-1.5 w-1.5 mx-[5px] rounded-full bg-brand hover:bg-main-txt'></span>
          <span className='text-xs'>This year</span>
        </div>
        <div className='hidden sm:flex items-center pl-1 pr-2 py-0.5 rounded-lg'>
          <span className='h-1.5 w-1.5 mx-[5px] rounded-full bg-cyan hover:bg-main-txt'></span>
          <span className='text-xs'>Last year</span>
        </div>
      </div>
      {/* CHART SECTION  */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className='h-full w-full'>
          <ResponsiveContainer width='99%' height='100%'>
            <AreaChart data={data!.slice(0, 7)}>
              <defs>
                <linearGradient id='thisYear' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='grey' stopOpacity={0.4} />
                  <stop offset='70%' stopColor='grey' stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey='month'
                tickFormatter={month => month.slice(0, 3)}
                axisLine={false}
                tickLine={false}
                padding={{ left: 30 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                padding={{ bottom: 10 }}
                tickCount={5}
                tickFormatter={value =>
                  value >= 1000 ? value / 1000 + "k" : value
                }
                interval='preserveStart'
                width={35}
              />
              <Tooltip
                content={<CustomTooltip />}
                labelStyle={{
                  display: "none",
                }}
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                cursor={{ stroke: isDark ? "white" : "black", strokeWidth: 2 }}
              />
              <Area
                type='monotone'
                dataKey='thisYear'
                stroke={isDark ? "#9F9FF8" : "black"}
                fill='url(#thisYear)'
                activeDot={{
                  fill: isDark ? "black" : "white",
                  stroke: isDark ? "white" : "black",
                }}
              />
              <Area
                type='monotone'
                dataKey='lastYear'
                stroke='#AEC7ED'
                fill='none'
                strokeDasharray={3}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default CustomLineChart;
