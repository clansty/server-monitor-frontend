import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MemoryBlock from "../../components/MemoryBlock";
import { fetchMemoryInfo } from "../../api/memory";

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
    </>
  );
}

export default Memory;
