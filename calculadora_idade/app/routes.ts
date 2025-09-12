
import { type RouteConfig, index, route } from "@react-router/dev/routes"; // 1. Importe 'route'

export default [
  index("routes/home.tsx"),
  route("countdown", "routes/countdown.tsx"), // 2. Adicione esta linha
] satisfies RouteConfig;