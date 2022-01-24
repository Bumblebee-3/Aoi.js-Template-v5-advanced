const aoijs = require("aoi.js")


let text = require("../callbacks.json")
/*
Handles callbacks.
*/

function handle_callbacks(bot) {
  console.log("╔════════ ≪ CALLBACK EVENTS ≫ ════════╗");
  for(var item in text.callbacks) {
  console.log(text.callbacks[item]);
  eval(text.callbacks[item]);
  }
  console.log("╚════════ ≪ CALLBACK EVENTS ≫ ════════╝");

}


module.exports={
  handle_callbacks
}