<h2 align="center">electron-session-proxy</h2>

🎉🎉 A socks proxy with user authentication can be set for electron's session

### Install

```sh
# NPM
npm install electron-session-proxy

# Yarn
yarn add electron-session-proxy

# PNPM
pnpm add electron-session-proxy
```

### Before use

```ts
import { session } from "electron";

const ses = session.fromPartition("persist:github");

// proxy is invalid ❌❌ Unable to authenticate
ses.setProxy({ proxyRules: "socks5://user:pass@127.0.0.1:1080" });
```

### After use

```ts
import { session } from "electron";
import { sockProxyRules } from "electron-session-proxy";

const ses = session.fromPartition("persist:github");

// proxyRules === 'http://127.0.0.1:[random-port]'
const proxyRules = await sockProxyRules("socks5://user:pass@127.0.0.1:1080");

// proxy is valid ✅✅ Able to authenticate
ses.setProxy({ proxyRules });
```

### Thanks

Thanks to the socks( [GitHub](https://github.com/JoshGlazebrook/socks) | [npm](https://www.npmjs.com/package/socks) ) project, it has been a huge help to me.
