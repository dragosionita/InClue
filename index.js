require('dotenv').config();
const Scraper = require('./scraper.js');
const db = require('./db');
const express = require('express');

const app = express();
const port = 3000;

app.get('/images', async (req, res) => {
  let urls = [
    'https://www.joyja.com/collections/absorbent-period-panty-all/hipster',
    'https://www.joyja.com/collections/absorbent-period-panty-all',
    'https://www.joyja.com/collections/absorbent-period-panty-boy-short',
    'https://www.joyja.com/collections/absorbent-period-panty-cheeky',
    'https://www.joyja.com/collections/absorbent-period-panty-bikini',
    'https://www.joyja.com/collections/absorbent-period-panty-brief', 
    'https://www.joyja.com/collections/absorbent-period-panty-thong'
  ];
  let tag = 'srcset';
  let imageUrls = [];

  const scraper = new Scraper;

  await scraper.openBrowser();

  for(const url of urls) {
    let imgUrls = await scraper.scrapeImages(url, tag);

    imageUrls.push(...imgUrls);
  }

  scraper.closeBrowser();

  res.json(imageUrls);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
