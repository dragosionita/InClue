const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");

class Scraper {
  async autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            let distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
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
    
    const uniqueOnly = (value, index, self) => {
      return self.indexOf(value) === index;
    }

    images.filter(img => img.getAttribute(tag) != null)
      .map(img => img.getAttribute(tag))
      .filter(uniqueOnly)
      .forEach((img) => {
        let imgUrl = 'https:' + img.match(/\/\/[^ ]+?(?:\.jpg|\.png|\.jpeg)/g);
        console.log(imgUrl);
        if(Array.isArray(imgUrl)) {
          imageUrls.push(imgUrl[3]);
        } else {
          imgUrl.split(',').forEach(im => {
            if(!im.startsWith('http') && !im.startsWith('https') && im != null) {
              imageUrls.push('https:' + im);
            } else {
              imageUrls.push(im);
            }
          })
        }
    });
    
    return imageUrls;
  };
}

module.exports = Scraper;
