import { useState } from "react";
import {
  Bar,
  BarChart,
  BarProps,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { twMerge } from "tailwind-merge";
import useGetWebTraffic from "../../hooks/useGetWebTraffic";
import Loading from "./Loading";

const CustomBar = ({ x, y, width, height, fill }: BarProps) => {
  const [hovered, setHovered] = useState(false);
  const barWidth = width ? width / 3 : 0;
  return (
    <g
      className=' duration-500 '
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <rect
        x={x}
        y={y}
        width={barWidth}
        height={height}
        rx={2}
        ry={2}
        fill={fill}
        className={`duration-100  ${hovered ? "animate-pulse" : ""}`}
      />
      <rect
        x={x ? +x + barWidth + 2 : 0}
        y={y}
        rx={2}
        ry={2}
        width={barWidth}
        height={height}
        fill={fill}
        fillOpacity={0.4}
        className={`duration-100  ${hovered ? "animate-pulse" : ""}`}
      />
      <rect
        x={x ? +x + 2 * (barWidth + 2) : 0}
        y={y}
        rx={2}
        ry={2}
        width={barWidth}
        height={height}
        fill={fill}
        fillOpacity={0.1}
        className={`duration-100 ${hovered ? "animate-pulse" : ""}`}
      />
      <rect
        x={+x! - 20}
        y={+y! - 20}
        width={width ? width + 20 : 0}
        height={height ? height + 20 : 0}
        fill='transparent'
      />
    </g>
  );
};

const VBar = ({ className }: { className: string }) => {
  const { data, isLoading } = useGetWebTraffic();
  return (
    <div
      className={twMerge(
        "bg-bg2 h-[330px] min-w-[200px] 2xl:max-w-[272px] flex flex-col gap-4 p-6 rounded-2xl",
        className
      )}
    >
      <h1 className='rounded-lg font-semibold cursor-default hover:px-1 duration-500'>
        Traffic by Website
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='h-full w-full flex gap-2'>
          <div className='flex flex-col justify-center gap-6 hover:px-1 duration-500'>
            {data.map(d => (
              <span
                key={d.website}
                className='capitalize text-xs cursor-default'
              >
                {d.website}
              </span>
            ))}
          </div>
          <div className='w-full h-full'>
            <ResponsiveContainer width='99%' height='100%'>
              <BarChart layout='vertical' data={data}>
                <XAxis type='number' hide={true} />
                <YAxis
                  type='category'
                  dataKey='website'
                  axisLine={false}
                  tickLine={false}
                  hide={true}
                />
                <Bar
                  dataKey='traffic'
                  barSize={3}
                  className='fill-main-txt group'
                  shape={<CustomBar dataKey='traffic' />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default VBar;
