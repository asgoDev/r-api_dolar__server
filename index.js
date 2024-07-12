import { envs } from "./src/config/env.js";
import { startServer } from "./src/server.js";

const main =()=> {
  startServer(envs)
}

(()=>{
  main()
})()