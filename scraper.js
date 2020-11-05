const { loader } = require("./utils/loader");

const getListings = ($, listings) => {
  $("div.result-info").each((index, el) => {
    const date = new Date(
      $(el).find("time.result-date").attr("datetime")
    ).toDateString();
    const neighborhoodData = $(el).find(".result-hood").text();
    const neighborhood = neighborhoodData.slice(2, neighborhoodData.length - 1);
    const anchor = $(el).find("a.result-title");
    listings.push({
      title: anchor.text(),
      link: anchor.attr("href"),
      date: date,
      neighborhood: neighborhood,
    });
  });
};

exports.getAllListings = async (page) => {
  let listings = [];
  let $ = await loader(page);
  let url = `${page.url()}?s=${listings.length}`;
  //   getListings($, listings);
  console.log(parseInt($("span.totalcount").text().slice(0, 3)));
  //   console.log(
  //     $(
  //       "div.search-legend.bottom > div.paginator.buttongroup.firstpage > span.buttons > a.button.next"
  //     ).text()
  //   );
  while (listings.length < parseInt($("span.totalcount").text().slice(0, 3))) {
    await page.goto(url);
    // await page.waitForNavigation();
    $ = await loader(page);
    console.log(page.url());
    getListings($, listings);
  }
  return listings;
};
