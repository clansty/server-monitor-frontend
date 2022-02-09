import { useState, useEffect } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { fetchCPUinfo } from "../../api/cpu";
import { ICPU } from "../../types";
import DataBlock from "../../components/CPUBlock";
import CPUChart from "./CPUChart";
import CPUInfo from "./CPUInfo";

function CPU() {
  const [cpu, setCpu] = useState<ICPU>({} as ICPU);

  useEffect(() => {
    fetchCPUinfo().then((res) => {
      setCpu(res.data);
    });
  }, []);

  return (
    <>
      {/* CPU 大概数据 --- start --- */}
      <CPUInfo cpu={cpu} />
      {/* CPU 大概数据 --- end --- */}

      {/* CPU 相关指标 --- start --- */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h5">CPU 相关状态数据</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataBlock title="用户空间占用CPU百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="内核空间占用CPU百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock
            title="改变过优先级的进程占用CPU的百分比"
            data={cpu.model}
          />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="空闲 CPU 百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="等待输入输出的 CPU 时间百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="硬件 CPU 中断占用百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="软中断占用百分比" data={cpu.model} />
        </Grid>
        <Grid item xs={3}>
          <DataBlock title="虚拟机占用百分比" data={cpu.model} />
        </Grid>
      </Grid>
      {/* CPU 相关指标 --- end --- */}

      {/* CPU 图表 --- start --- */}
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          mt: 5,
        }}
      >
        <Box sx={{ p: 5 }}>
          <Typography variant="h5">CPU 相关状态数据</Typography>
        </Box>
        <CPUChart />
      </Card>
      {/* CPU 图表 --- end --- */}
    </>
  );
}

export default CPU;
