import request from "../utils/request";

export function fetchNetwork(params: string) {
  return request({
    url: `/monitorData?metricName=${params}&period=300`,
    method: "GET",
  });
}
