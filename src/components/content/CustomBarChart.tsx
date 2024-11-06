import { useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../contexts/themeContext/ThemeContext";
import { twMerge } from "tailwind-merge";
import Loading from "./Loading";

// CUSTOMIZED BAR SHAPE
type CustomBarProps = {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  index?: number;
};
const CustomBar = ({ x, y, width, height, index }: CustomBarProps) => {
  const { isDark } = useDarkMode();
  const [hovered, setHovered] = useState(false);
  const colors = [
    "#9F9FF8",
    "#96E2D6",
    isDark ? "#9F9FF8" : "black",
    "#92BFFF",
    "#AEC7ED",
    "#94E9B8",
  ];
  return (
    <g
      className='duration-500 '
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        ry={8}
        fill={colors[typeof index === "number" ? index % colors.length : 0]}
        className={`duration-300 " hover:fill-brand`}
      />
      {hovered && (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={8}
          ry={8}
          className={`duration-300 fill-white/20 pointer-events-none `}
        />
      )}
    </g>
  );
};

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

// MY COMPONENT
type CustomBarChartProps = {
  data: {
    name: string;
    value: number;
  }[];
  isLoading?: boolean;
  className?: string;
};
const CustomBarChart = ({
  className,
  data,
  isLoading,
}: CustomBarChartProps) => {
  return isLoading ? (
    <Loading />
  ) : (
    <div className={twMerge("h-full w-full", className)}>
      <ResponsiveContainer width='99%' height='100%'>
        <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "var(--text-soft)",
            }}
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            padding={{ bottom: 10 }}
            tickCount={5}
            tickFormatter={value =>
              value >= 1000 ? value / 1000 + "k" : value
            }
            tick={{
              fill: "var(--text-soft)",
            }}
            width={35}
            interval='preserveStart'
          />
          <Bar
            dataKey='value'
            barSize={28}
            className='fill-main-txt group'
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
