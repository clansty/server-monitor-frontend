import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProcessBlock from "../../components/ProcessBlock";
import { fetchProcessInfo } from "../../api/process";

interface IProcess {
  total: string;
  running: string;
  sleeping: string;
  stopped: string;
  zombie: string;
}

/**
 * 进程相关信息
 */
function Process() {
  const [process, setProcess] = useState<IProcess>({} as IProcess);

  useEffect(() => {
    fetchProcessInfo().then((res) => {
      setProcess(res.data);
    })
  },[])

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2.4}>
          <ProcessBlock title="进程总数" data={process.total} />
        </Grid>
        <Grid item xs={2.4}>
          <ProcessBlock title="正在运行的进程数" data={process.running} />
        </Grid>
        <Grid item xs={2.4}>
          <ProcessBlock title="睡眠的进程数" data={process.sleeping} />
        </Grid>
        <Grid item xs={2.4}>
          <ProcessBlock title="停止的进程数" data={process.stopped} />
        </Grid>
        <Grid item xs={2.4}>
          <ProcessBlock title="僵尸进程数" data={process.zombie} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Process;
