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

const fs = require('fs');

function handle_custom_funcs(client,folder) {
  console.log("\nLoading Custom Functions");
  console.log("|------------------------------------------|\n\n")
  
  let files = fs.readdirSync(`./${folder}`).filter(file => file.endsWith('js'))
  if (files.length==0){
    console.log("NO CUSTOM FUNCTION TO LOAD!")
    console.log("\n\n|------------------------------------------|\n")
  console.log("Finished Loading Custom Functions\n");
    return;
  }
  files.forEach(x => {
    bot.functionManager.createCustomFunction({
      name: require(`./${folder}/${x}`).name,
      params:require(`./${folder}/${x}`).params,
      type: require(`./${folder}/${x}`).type,
      code: require(`./${folder}/${x}`).code
    })
    console.log("\nWalking in: "+process.cwd()+`/${folder}/${x}`)
    console.log("Loaded custom function: "+require(`./${folder}/${x}`).name)
  });
  console.log("\n\n|------------------------------------------|\n")
  console.log("Finished Loading Custom Functions\n");

}

handle_custom_funcs(bot,"customFunctions");//bot is aoi.client and folder here is name of folder for eg:
