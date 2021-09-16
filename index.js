const Scraper = require('./scraper.js');
const express = require('express');

const app = express();
const port = 3000;

app.get('/images', async (req, res) => {
  let url = 'https://www.joyja.com/collections/absorbent-period-panty-brief/';
  let tag = 'srcset';

  res.json(await (new Scraper(url)).scrapeImages(tag));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
