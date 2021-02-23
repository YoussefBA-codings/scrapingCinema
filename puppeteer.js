const puppeteer = require('puppeteer');
const configureBrowser = (url) => new Promise(
	async (resolve, reject) => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);
		resolve(page);
	}
);

module.exports = { configureBrowser };
