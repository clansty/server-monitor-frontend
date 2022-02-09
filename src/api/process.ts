import request from "../utils/request";

/**
 * 获取进程的相关数据
 */
export function fetchProcessInfo() {
  return request({
    url: "/process",
    method: "GET",
  })
}