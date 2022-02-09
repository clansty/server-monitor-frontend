import { useEffect, useState } from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { fetchMemoryInfo } from "../../api/memory";
import MemoryBlock from "../../components/MemoryBlock";
import MemoryChart from "./MemoryChart";

interface IMemory {
  buffers: string;
  free: string;
  total: string;
  used: string;
}

function Memory() {
  const [memory, setMemory] = useState<IMemory>({} as IMemory);

  useEffect(() => {
    fetchMemoryInfo().then((res) => {
      console.log(res.data);

      setMemory(res.data);
    });
  }, []);

  return (
    <>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h5">内存 相关状态数据</Typography>
      </Box>

      {/* 内存 相关指标 --- start --- */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MemoryBlock title="物理内存总量" data={memory.total} />
        </Grid>
        <Grid item xs={3}>
          <MemoryBlock title="使用的物理内存总量" data={memory.used} />
        </Grid>
        <Grid item xs={3}>
          <MemoryBlock title="空闲内存总量" data={memory.free} />
        </Grid>
        <Grid item xs={3}>
          <MemoryBlock title="内核缓存的内存量" data={memory.buffers} />
        </Grid>
      </Grid>
      {/* 内存 相关指标 --- end --- */}

      <Card
        sx={{
          width: "42%",
          height: 500,
          mt: 5,
        }}
      >
        <MemoryChart />
      </Card>
    </>
  );
}

export default Memory;
