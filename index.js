require('dotenv').config();
const Scraper = require('./scraper');
const db = require('./db');
const express = require('express');
const { dosDateTimeToDate } = require('yauzl');

const app = express();
const port = 3000;

app.get('/images', async (req, res) => {
  console.log(req.query)
  const url = req.query.url
  
  let tags = ['srcset', 'src'];
  let imageUrls = [];

  const scraper = new Scraper;

  await scraper.openBrowser();

  for(const tag of tags) {
      let imgUrls = await scraper.scrapeImages(url, tag);

      imageUrls.push(...imgUrls);
  }

  scraper.closeBrowser();

  res.json(imageUrls);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
