/**
 * CPU 请求返回的数据格式
 */
export interface ICPU {
  processor: string;
  vendor_id: string;
  "cpu family": string;
  model: string;
  "model name": string;
  stepping: string;
  microcode: string;
  "cpu MHz": string;
  "cache size": string;
  "physical id": string;
  siblings: string;
  "core id": string;
  "cpu cores": string;
  apicid: string;
  "initial apicid": string;
  fpu: string;
  fpu_exception: string;
  "cpuid level": string;
  wp: string;
  flags: string;
  bogomips: string;
  "clflush size": string;
  cache_alignment: string;
  "address sizes": string;
  "power management": string;
}

/**
 * 内存请求返回的数据格式
 */
export interface IMemory {
  MemTotal: string;
  MemFree: string;
  MemAvailable: string;
  Buffers: string;
  Cached: string;
  SwapCached: string;
  Active: string;
  Inactive: string;
  "Active(anon)": string;
  "Inactive(anon)": string;
  "Active(file)": string;
  "Inactive(file)": string;
  Unevictable: string;
  Mlocked: string;
  SwapTotal: string;
  SwapFree: string;
  Dirty: string;
  Writeback: string;
  AnonPages: string;
  Mapped: string;
  Shmem: string;
  Slab: string;
  SReclaimable: string;
  SUnreclaim: string;
  KernelStack: string;
  PageTables: string;
  NFS_Unstable: string;
  Bounce: string;
  WritebackTmp: string;
  CommitLimit: string;
  Committed_AS: string;
  VmallocTotal: string;
  VmallocUsed: string;
  VmallocChunk: string;
  HardwareCorrupted: string;
  AnonHugePages: string;
  CmaTotal: string;
  CmaFree: string;
  HugePages_Total: string;
  HugePages_Free: string;
  HugePages_Rsvd: string;
  HugePages_Surp: string;
  Hugepagesize: string;
  DirectMap4k: string;
  DirectMap2M: string;
  DirectMap1G: string;
}
