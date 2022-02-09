import { useEffect, useState } from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { fetchMemoryInfo } from "../../api/memory";
import MemoryBlock from "../../components/MemoryBlock";
import MemoryChart from "./MemoryChart";
import MemoryInfo from "./MemoryInfo";
import { IMemory } from "../../types";
import { toNumber, toNumberWithSub } from "../../utils/formatNumber";

function Memory() {
  const [memory, setMemory] = useState<IMemory>({} as IMemory);

  useEffect(() => {
    fetchMemoryInfo().then((res) => {
      setMemory(res.data);
    });
  }, []);

  return (
    <>
      <MemoryInfo memory={memory} />

      {/* 内存 相关指标 --- start --- */}
      <Box sx={{ pb: 5, pl: 5, pt: 5 }}>
        <Typography variant="h5">内存 相关状态数据</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MemoryBlock title="总内存" data={memory.MemTotal} />
        </Grid>
        <Grid item xs={4}>
          <MemoryBlock title="空闲内存" data={memory.MemFree} />
        </Grid>
        <Grid item xs={4}>
          <MemoryBlock title="可用内存" data={memory.MemFree} />
        </Grid>
      </Grid>
      {/* 内存 相关指标 --- end --- */}

      {/* 内存 图表 --- start --- */}
      <Card
        variant="outlined"
        sx={{
          mt: 5,
        }}
      >
        <MemoryChart
          total={toNumber(memory.MemTotal)}
          used={toNumberWithSub(memory.MemTotal, memory.MemFree)}
          free={toNumber(memory.MemFree)}
        />
      </Card>
      {/* 内存 图表 --- end --- */}
    </>
  );
}

export default Memory;
