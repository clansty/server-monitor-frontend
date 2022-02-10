import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { fetchNetwork } from "../../api/network";
import { toTime } from "../../utils/formatNumber";

type StateType = Array<{ name: string; Out: number; In: number }>;

/**
 * WanpkgChart
 */
const WanpkgChart = () => {
  const [data, setData] = useState<StateType>([]);

  useEffect(() => {
    const tmp: any = [];
    fetchNetwork("WanOutpkg").then((res: any) => {
      const timestamps = res.DataPoints[0].Timestamps.slice(-10);
      const values = res.DataPoints[0].Values.slice(-10);

      for (let i = 0; i < 10; i++) {
        tmp.push({
          name: toTime(timestamps[i]),
          Out: values[i],
          In: 0,
        });
      }
    });
    fetchNetwork("WanInpkg").then((res: any) => {
      const values = res.DataPoints[0].Values.slice(-10);
      for (let i = 0; i < 10; i++) {
        tmp[i].In = values[i];
      }
      console.log(tmp);

      setData(tmp);
    });
  }, []);

  return (
    <>
      <Box sx={{ p: 5, pt: 0 }}>
        <Typography variant="h5">外网出入包量 （个/s）</Typography>
      </Box>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Out"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="In" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default WanpkgChart;
