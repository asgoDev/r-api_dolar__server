import { envs } from "./server/config/env.js";
import { startServer } from "./server/server.js";

const main =()=> {
  startServer(envs)
}

(()=>{
  main()
})()