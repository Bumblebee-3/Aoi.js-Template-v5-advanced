const aoijs = require("aoi.js")


let text = require("../slash.json")
/*
Handles callbacks.
*/

function handle_slash(bot) {
  console.log("╔════════ ≪ SLASH COMMANDS ≫ ════════╗");
  for(var item in text.slash) {
    a=`
let a="$log[Loading...]"
bot.readyCommand({
          channel:"",
          code:text.slash[item]+a
       })`
    eval(a);
  }
  console.log("╚════════ ≪ Slash Commands Loaded ≫ ════════╝");

}

module.exports={
  handle_slash
}