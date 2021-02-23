const axios = require('axios');
const cheerio = require('cheerio');
const { configureBrowser } = require('./puppeteer');

const url = 'https://in.bookmyshow.com/explore/movies-';

const getMoviesByCity = async (city) => {
	configureBrowser(`${url}city`).then(async (page) => {
		await page.reload();
		const html = await page.evaluate(() => document.body.innerHTML);
		console.log(html);
	});
};

getMoviesByCity('mumbai');
