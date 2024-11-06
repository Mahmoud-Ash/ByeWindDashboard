import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { twMerge } from "tailwind-merge";
import { useDarkMode } from "../../contexts/themeContext/ThemeContext";
import Loading from "./Loading";

//CUSTOMIZED TOOTIP
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value?: number }[];
}) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    return (
      <div className='bg-black/80 text-white backdrop-blur-2xl py-1 px-2 rounded-lg'>
        <p>{value}</p>
      </div>
    );
  }

  return null;
};

type DoughnutProps = {
  className?: string;
  data: {
    name: string;
    value: number;
  }[];
  isLoading: boolean;
};
const Doughnut = ({ className, data, isLoading }: DoughnutProps) => {
  const { isDark } = useDarkMode();
  const gradients = [
    {
      id: "grad1",
      colors: [
        isDark ? "#9F9FF8" : "black",
        isDark ? "#9F9FF8" : "rgba(0,0,0,0.6)",
      ],
    },
    { id: "grad2", colors: ["#92BFFF", "#92BFFF"] },
    { id: "grad3", colors: ["#AEC7ED", "#AEC7ED"] },
    { id: "grad4", colors: ["#94E9B8", "#94E9B8"] },
  ];
  const colors = [
    isDark ? "#9F9FF8" : "black",
    "#92BFFF",
    "#AEC7ED",
    "#94E9B8",
  ];

  return isLoading ? (
    <Loading />
  ) : (
    <div className={twMerge("grow flex items-center gap-10 px-5", className)}>
      {/* CHART  */}
      <PieChart width={130} height={130}>
        <defs className=''>
          {gradients.map((grad, index) => (
            <linearGradient
              key={index}
              id={grad.id}
              x1='0'
              y1='0'
              x2='0'
              y2='1'
            >
              <stop
                offset='0%'
                stopColor={grad.colors[0]}
                stopOpacity={1}
                className='duration-500'
              />
              <stop
                offset='80%'
                stopColor={grad.colors[1]}
                stopOpacity={1}
                className='duration-500'
              />
            </linearGradient>
          ))}
        </defs>
        <Pie
          data={data}
          dataKey='value'
          cx='50%'
          cy='50%'
          innerRadius={30}
          outerRadius={60}
          startAngle={90}
          endAngle={-270}
          stroke='none'
          paddingAngle={3}
          cornerRadius={3}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`url(#${gradients[index].id})`}
              className='hover:scale-[1.03] duration-300'
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} offset={0} />
      </PieChart>

      {/* LEGEND  */}
      <div className='grow flex flex-col gap-3 rounded-xl'>
        {data.map((datum, index) => (
          <div
            key={index}
            className='flex items-center h-5 rounded-lg text-xs '
          >
            <p className='capitalize flex items-center pl-1 pr-2 py-0.5 rounded-full hover:bg-hover cursor-default'>
              <span
                className='size-1.5 rounded-full mx-[5px] hover:bg-main-txt'
                style={{ backgroundColor: colors[index % colors.length] }}
              ></span>
              {datum.name}
            </p>
            <div className='group grow flex'>
              <span className='grow text-right duration-300 cursor-default group-hover:grow-0 '>
                {datum.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doughnut;
