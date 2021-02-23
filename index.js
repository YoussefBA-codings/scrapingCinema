/* const cities = ['mumbai', 'ncr', 'bengaluru', 'hydrabad', 'ahmedabad', 'chennai', 'pune', 'kolkata', 'kochi'];

const languages = ['hindi', 'english', 'gujarti', 'marathi', 'tamil', 'telugu', 'japanese', 'kannada'];
 */

const CineInKoreaService = require('./services/bots/CineInKoreaService.js');

const ciks = new CineInKoreaService('http://cineinkorea.com/wp/?page_id=195');
const cityRowTableHtml = ciks.getCity();
console.log(cityRowTableHtml);
