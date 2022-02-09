import React from 'react';
import { Box, Typography } from "@mui/material";
import { IMemory } from "../../types";
import DescBlock from "../../components/DescBlock";

/**
 * 显示内存相关介绍
 */
const MemoryInfo = (props: { memory: IMemory }) => {
  const memory = props.memory;

  return (
    <>
      <Box sx={{ pb: 5, pl: 5 }}>
        <Typography variant="h5">内存 相关信息</Typography>
      </Box>

      <Box
        sx={{
          pl: 15,
          pr: 15,
          display: "grid",
          columnGap: 20,
          rowGap: 2,
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <DescBlock title="CPU 产品系列代号" value={memory["MemAvailable"]} />
      </Box>
    </>
  );
};

export default MemoryInfo;
