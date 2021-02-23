const puppeteer = require('puppeteer');
const BaseService = require('./BaseService.js');

class PuppeteerService extends BaseService {
  constructor() {
    console.log('PUPPETEER SERVICE : Construtor');
  }

  configureBrowser(url) {
    return new Promise(
      async (resolve, reject) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        resolve(page);
      }
    );
  }

  async getHtmlFromElement(page, element = 'html') {
    const elementHandle = await page.$(element);
    const html = await page.evaluate(el => el.innerHTML, elementHandle);
    return html;
  }
}

module.exports = PuppeteerService;
