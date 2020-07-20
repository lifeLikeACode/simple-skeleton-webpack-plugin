const puppeteer = require("puppeteer");

class skeleton {
  constructor(options) {
    this.options = options;
  }
  async init() {
    this.browser = await puppeteer.launch({ headless: false });

    console.log("puppeteer launch");
  }
  async newPage() {
    // const { device } = this.options;
    const page = await this.browser.newPage();

    // await page.emulate(puppeteer.devices[device || "iphone 6"]);
    return page;
  }
  async genHTML(url) {
    const page = await this.newPage();
    const response = await page.goto(url, { waitUntil: "networkidle2" });
    if (response && !response.ok()) {
      throw new Error(`${response.status} on ${url}`);
    }
    console.log(response);
  }
}

module.exports = skeleton;
