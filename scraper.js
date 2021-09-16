const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");

class Scraper {
  constructor(url) {
    this.url = url;
  }

  async setupPuppeteer() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto(this.url);
  
    let html = await page.content();
    
    let dom = new JSDOM(html);

    await this.browser.close();

    return {
      dom, html
    }
  }

  async scrapeImages (tag) {
    const { dom } = await this.setupPuppeteer();

    let images = Array.from(dom.window.document.getElementsByTagName('img'));
    let imageUrls = [];
  
    images.forEach((img) => { 
      if (img.getAttribute(tag) == null)
        return;
  
      imageUrls.push('https:' + img.getAttribute(tag)?.match(/\/\/[^ ]+?(?:\.jpg|\.png|\.jpeg)/g)[3]);
    });
    
    return imageUrls;
  };
}

module.exports = Scraper;
