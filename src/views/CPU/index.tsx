import { useState, useEffect } from "react";
import DataBlock from "../../components/CPUBlock";
import { fetchCPUinfo } from "../../api/cpu";
import { Box, Grid, Typography } from "@mui/material";

interface ICPU {
  total: string;
  running: string;
  sleeping: string;
  stopped: string;
  zombie: string;
  us: string;
  sy: string;
  ni: string;
  id: string;
  wa: string;
  hi: string;
  si: string;
  st: string;
}

function CPU() {
  const [cpu, setCpu] = useState<ICPU>({} as ICPU);

  useEffect(() => {
    fetchCPUinfo().then((res) => {
      console.log(res.data);

      setCpu(res.data);
    });
  }, []);

  return (
    <div>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h5">CPU 相关状态数据</Typography>
      </Box>
      {/* 进程 相关指标 --- start --- */}
      {/* <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataBlock title="进程总数" data={cpu.total} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="正在运行的进程数" data={cpu.running} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="睡眠的进程数" data={cpu.sleeping} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="停止的进程数" data={cpu.stopped} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="僵尸进程数" data={cpu.zombie} />
        </Grid>
      </Grid> */}
      {/* 进程 相关指标 --- end --- */}

      {/* CPU 相关指标 --- start --- */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataBlock title="用户空间占用CPU百分比" data={cpu.us} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="内核空间占用CPU百分比" data={cpu.sy} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock
            title="改变过优先级的进程占用CPU的百分比"
            data={cpu.ni}
          />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="空闲 CPU 百分比" data={cpu.id} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="等待输入输出的 CPU 时间百分比" data={cpu.wa} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="硬件 CPU 中断占用百分比" data={cpu.hi} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="软中断占用百分比" data={cpu.si} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="虚拟机占用百分比" data={cpu.st} />
        </Grid>
      </Grid>
      {/* CPU 相关指标 --- end --- */}
    </div>
  );
}

export default CPU;
