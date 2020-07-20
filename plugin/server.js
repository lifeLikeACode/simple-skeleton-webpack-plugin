const http = require("http");

class Server {
  constructor(options) {
    this.options = options;
  }
  open() {
    this.httpServer = http.createServer();
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
