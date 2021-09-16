const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");
class Scraper {
  async autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
  }

  async openBrowser() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  async setupPuppeteer(url) {
    await this.page.goto(url);

    await this.page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });

    await this.autoScroll(this.page);
  
    let html = await this.page.content();
    
    let dom = new JSDOM(html);

    return {
      dom, html
    }
  }

  async closeBrowser() {
    await this.browser.close();
  }

  async scrapeImages (url, tag) {
    const { dom } = await this.setupPuppeteer(url);

    let images = Array.from(dom.window.document.getElementsByTagName('img'));
    let imageUrls = [];
  
    images.filter(img => img.getAttribute(tag) != null).forEach((img) => { 
      imageUrls.push('https:' + img.getAttribute(tag)?.match(/\/\/[^ ]+?(?:\.jpg|\.png|\.jpeg)/g)[3]);
    });
    
    return imageUrls;
  };
}

module.exports = Scraper;
