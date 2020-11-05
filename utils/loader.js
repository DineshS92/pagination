const cheerio = require("cheerio");

exports.loader = async (page) => {
  // await page.goto(url);
  const html = await page.content();
  const $ = cheerio.load(html);
  return $;
};
