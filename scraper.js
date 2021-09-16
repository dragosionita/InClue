const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");

class Scraper {
  constructor(url) {
    this.url = url;
  }

  async setupPuppeteer() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  
    await this.page.goto(this.url);
  
    this.html = await this.page.content();
    
    this.dom = new JSDOM(this.html);

    await this.browser.close();
  }

  async scrapeImages (tag) {
    await this.setupPuppeteer();

    let images = Array.from(this.dom.window.document.getElementsByTagName('img'));
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
