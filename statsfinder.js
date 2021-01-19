const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

//Rocket League Stats URL
const aaron_rocket_stats = 'https://rocketleague.tracker.network/rocket-league/profile/xbl/xShater/overview';
const malik_rocket_stats = 'https://rocketleague.tracker.network/rocket-league/profile/xbl/ll%20vLeek%20ll/overview'
//Cheerio Webscrapping
async function getPlayerData(){
    const { data } = await axios.get(aaron_rocket_stats);
    const $ = cheerio.load(data);
    const table = $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid__sidebar-left > aside > div.overview.card.bordered.responsive > div');

    const stats = [];
    table.find('numbers').each((i, element) => {
        const $element = $(element);
        console.log($element.text())
    
    });
    
}

//Puppeteer Scraping
async function getAaronData(){
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(aaron_rocket_stats);
    const table = await page.$('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid__sidebar-left > aside > div.overview.card.bordered.responsive > div')
    await table.screenshot({path: 'statsAaron.png'})
    browser.close();
}

async function getMalikData(){
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(malik_rocket_stats);
    const table = await page.$('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid__sidebar-left > aside > div.overview.card.bordered.responsive > div')
    await table.screenshot({path: 'statsMalik.png'})
    browser.close();
}

module.exports = {
    getAaronData,
    getMalikData,
    getPlayerData
  };