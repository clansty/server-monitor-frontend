import request from "../utils/request";

/**
 * 获取 CPU 的相关数据
 */
export function fetchCPUinfo() {
  return request({
    url: "/cpu",
    method: "GET",
  });
}