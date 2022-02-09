import request from "../utils/request";

export function fetchMemoryInfo() {
  return request({
    url: "/memory",
    method: "GET",
  })
}