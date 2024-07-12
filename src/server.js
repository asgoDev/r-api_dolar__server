import express from "express";
import { updateDollarPrice } from "./controllers/updateDollarPrice.controller.js";
import serverRoutes from "./router/server.routes.js";
import { fileURLToPath } from "url";

export const startServer = ({ PORT }) => {
  const app = express();

  app.use(express.static("client"));

  app.use("/server", serverRoutes);
  // Para obtener el directorio actual en ES6
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);

  // app.get("*", (req, res) => {
  //   const indexPath = path.join(
  //     __dirname + `..`
  //   );
  //   console.log(indexPath);
  //   res.sendFile(indexPath);
  // });
  // app.get("*", (req, res) => {
  //   res.send("<h1>No, no. Por aqui no es...</>");
  // });

  app.listen(PORT, () => {
    console.log(`server running at ${PORT} port`);
  });
};
