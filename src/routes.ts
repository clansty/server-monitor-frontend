interface IRoute {
  path: string;
  name: string;
}

/**
 * 路由信息
 */
const routes: IRoute[] = [
  {
    path: "/",
    name: "CPU",
  },
  {
    path: "/memory",
    name: "内存",
  },
  {
    path: "/network",
    name: "网络",
  },
  {
    path: "/process",
    name: "进程"
  }
];

export default routes;
