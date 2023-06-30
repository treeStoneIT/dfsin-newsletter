const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor:2});
  await page.goto('http://127.0.0.1:8080/sep-2020.html');
  await page.pdf({
    // path:"screenshots/june-2020.pdf",
    path:"screenshots/sep-2020.pdf",
    pageRanges:"1,2,3",
    format: "letter",
    printBackground: true
  });
  await browser.close();
})();