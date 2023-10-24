const http = require("http");
const { router } = require("./router");
const { logger } = require("./utils/logger");

http
  .createServer((req, res) => {
    req.on("error", (error) => {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("An server error has occurred:\n" + error);
    });
    router(req, res);
  })
  .listen(3000, () => console.log("Server listening on port 3000."));
