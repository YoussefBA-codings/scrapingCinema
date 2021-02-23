// const axios = require('axios');
// const cheerio = require('cheerio');
const PuppeteerService = require('../PuppeteerService.js');

class CineInKoreaService extends PuppeteerService {
  constructor(url) {
    this.firstUrl = url;
  }

  async checkSecurityOnSite(page, element = 'html') {
    const html = await super.getHtmlFromElement(page, element);
    if (/Please prove that you are human/.test(html)) {
      console.log('On peut click.');
      await Promise.all([
        page.waitForNavigation(),
        page.click('form > input[type="submit"]')
      ]);
    }
  }

  async getCity() {
    const page = await super.configureBrowser(this.firstUrl).catch(err => console.log(err));
    await page.reload();

    await this.checkSecurityOnSite(page, 'p');

    console.log('On peut continuer.');
    const html = await super.getHtmlFromElement(page, 'table#table>tbody');
    return html;
  }

  async getMoviesByCity(urlCity) {
    const page = await super.configureBrowser(urlCity).catch(err => console.log(err));
    await page.reload();

    await this.checkSecurityOnSite(page, 'p');

    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
      var data = {
        method: 'POST',
        postData: super.setFormData(urlCity.params)
      };
      interceptedRequest.continue(data);
    });

    const pageCine = await page.goto(urlCity.url);
    const htmlCine = await super.getHtmlFromElement(pageCine);
    console.log(htmlCine);
    return htmlCine;
  }
}

module.exports = CineInKoreaService;