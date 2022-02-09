import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import DescBlock from "../../components/DescBlock";
import ActiveShape from "./ActiveShape";

interface IProps {
  used: number;
  free: number;
  total: number;
}

/**
 * 内存数据图表
 */
const MemoryChart = (props: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([] as { name: string; value: number }[]);

  useEffect(() => {
    setData([
      { name: "空闲内存", value: props.free },
      {
        name: "已用内存",
        value: props.used,
      },
    ]);
  }, [props.free, props.used]);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <ResponsiveContainer width="45%" height={500}>
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

      <Box
        sx={{
          width: "15%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ pt: 2, pb: 2 }}>
          总内存:
        </Typography>
        <DescBlock title="KB:" value={props.total} />
        <DescBlock title="MB:" value={(props.total / 1024).toFixed(2)} />
        <DescBlock title="GB:" value={(props.total / 1024 / 1024).toFixed(2)} />

        <Typography variant="h5" sx={{ pt: 2, pb: 2 }}>
          空闲内存:
        </Typography>
        <DescBlock title="KB:" value={props.free} />
        <DescBlock title="MB:" value={(props.free / 1024).toFixed(2)} />
        <DescBlock title="GB:" value={(props.free / 1024 / 1024).toFixed(2)} />

        <Typography variant="h5" sx={{ pt: 2, pb: 2 }}>
          已用内存:
        </Typography>
        <DescBlock title="KB:" value={props.used} />
        <DescBlock title="MB:" value={(props.used / 1024).toFixed(2)} />
        <DescBlock title="GB:" value={(props.used / 1024 / 1024).toFixed(2)} />
      </Box>
    </Box>
  );
};

export default MemoryChart;
