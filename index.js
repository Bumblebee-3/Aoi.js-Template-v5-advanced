const config = require("./config.json")
const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: config.bot_prefix, //Discord Bot Prefix
intents: "all" //Discord Intents
});

//Handler
/*
See ./handler/ folder for more deailed information.

*/
const handler = require("./handler/mainhandler.js");
handler.handler_main(bot)

//Website/ Dashboard
/*
See ./website/dash.js for more detailed information.
*/
const website = require("./website/dash.js");
website.load_website(3000,bot);//3000 is the port you can change it of you want