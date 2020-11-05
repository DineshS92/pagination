const cheerio = require("cheerio");

exports.loader = async (page) => {
  const html = await page.content();
  const $ = cheerio.load(html);
  return $;
};
