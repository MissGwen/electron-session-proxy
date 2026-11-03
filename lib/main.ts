import { sockProxyRules } from "./socksSessionProxy";

console.warn(
  "[electron-session-proxy] This package has been renamed to electron-viasocks (v2). " +
    "v2 fixes HTTP forwarding, concurrency races and port collisions, and adds socket timeouts and graceful shutdown. " +
    "Migration guide: https://github.com/MissGwen/electron-viasocks#migrating-from-v1",
);

export { sockProxyRules };
