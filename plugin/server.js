const http = require("http");

let express = require("express");
class Server {
  constructor(options) {
    this.options = options;
  }
  open() {
    const app = (this.app = express());
    app.use(express.static(this.options.staticDir));

    this.httpServer = http.createServer(app);
    return new Promise((resolve) => {
      this.httpServer.listen(this.options.port, () => {
        console.log(`${this.options.port}端口服务器已经开启了`);

        resolve();
      });
    });
  }
  close() {
    return new Promise((resolve) => {
      this.httpServer.close(this.options.port, () => {
        console.log(`${this.options.port}端口服务器已经关闭了`);
        resolve();
      });
    });
  }
}
module.exports = Server;
