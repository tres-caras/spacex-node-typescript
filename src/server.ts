import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT);
    console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
  })
  .catch((err) => {
    console.log("########### E r r o r ##############");
    console.log(err);
  });
