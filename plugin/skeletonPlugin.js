const Server = require("./server.js");
const Skeleton = require("./skeleton.js");
console.log(Server);

class SkeletonPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap("SkeletonPlugin", async () => {
      this.server = new Server(this.options);
      await this.server.open();
      this.skeleton = new Skeleton(this.options);
      await this.skeleton.init();
      await this.skeleton.genHTML(this.options.origin);
    });
  }
}
module.exports = SkeletonPlugin;
