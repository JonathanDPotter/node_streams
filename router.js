const fs = require("fs");
const path = require("path");
const { logger } = require("./utils/logger");

const returnFourOhFour = (url, method, res) => {
  const fourOhFourStream = fs.createReadStream(
    path.join(__dirname, "/static/fourOhFour.html")
  );
  res.writeHead(404);
  fourOhFourStream.pipe(res);
  logger(404, url, method);
};

const router = ({ url, method }, res) => {
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          const readStream = fs.createReadStream(
            path.join(__dirname, "/static/index.html")
          );
          readStream.pipe(res);
          logger(200, url, method);
          break;
        case "/style.css":
          fs.readFile("./static/style.css", (error, data) => {
            if (error) {
              logger(500, url, method);
              console.log(error);
            } else {
              logger(200, url, method);
              res.writeHead(200, { "Content-Type": "text/css" });
              res.end(data);
            }
          });
          break;

        case "/main.js":
          fs.readFile("./static/main.js", (error, data) => {
            if (error) {
              logger(500, url, method);
              console.log(error);
            } else {
              logger(200, url, method);
              res.writeHead(200, { "Content-Type": "application/javascript" });
              res.end(data);
            }
          });
          break;

        case "/favicon.ico":
          fs.readFile("./static/favicon.ico", (error, data) => {
            if (error) {
              logger(500, url, method);
              console.log(error);
            } else {
              logger(200, url, method);
              res.writeHead(200, { "Content-Type": "image/x-icon" });
              res.end(data);
            }
          });
          break;
        default:
          returnFourOhFour(url, method, res);
          break;
      }
      break;

    default:
      returnFourOhFour(url, method, res);
      break;
  }
};
exports.router = router;
