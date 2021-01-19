const Discord = require('discord.js');
const bot = new Discord.Client();
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const scrape = require("./statsfinder")


//Message to tell user bot is online
bot.on('ready', () =>{
    console.log("Kami-sama has awoken")
})

//Discord Bot Ready
bot.on('message', (message) =>{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;

    //Prefix for bot is !
    let prefix = '!'
    //Splits Message into array [!ban, user, reason] = !ban Malik Unskilled
    let MessageArray = message.content.split(" ");
    //cmd is !ban an slices is to just ban
    let cmd = MessageArray[0].slice(prefix.length)
    //arguments is [Malik, Unskilled]
    let args = MessageArray.slice(1)

    //Stops if incorrect prefix is used
    if(!message.content.startsWith(prefix)) return;

    //DISCORD COMMAND LIST
    if (cmd == "rankings"){
        message.channel.send("1.Tosin and James \n2.David and Busayo \n3.Malik \n4.Dmitri \n5.Aaron")
    }

    if (cmd == "help"){
        message.channel.send("Current Commands:\n!rankings - Displays ranks of XBC players (Skill-Based).")
    }

    if (cmd == "statsaaron"){
        scrape.getAaronData();
        message.channel.send("Arieza Rocket League Stats: ", {files: ["statsAaron.png"]});
    }

    if (cmd == "statsmalik"){
        scrape.getMalikData();
        message.channel.send("Leekums Rocket League Stats: ", {files: ["statsMalik.png"]});
    }
})


bot.login("ODAwNzUwMjE5MzE3ODcwNjAz.YAWqwQ.9G0sdHXn2LENa9cmOfBMCAWpczg")
