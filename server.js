const puppeteer = require("puppeteer");
const { connectToDB } = require("./utils/db");
const { getAllListings } = require("./scraper");

const url = `https://sfbay.craigslist.org/search/hsw`;

(async function () {
  await connectToDB();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.goto(url);
  // await page.waitForNavigation();
  const listings = await getAllListings(page);
  console.log(listings);
})();
