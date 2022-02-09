import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import ActiveShape from "./ActiveShape";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

/**
 * 内存数据图表
 */
const MemoryChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={ActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MemoryChart;
