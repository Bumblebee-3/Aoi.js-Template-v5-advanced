const aoijs = require("aoi.js")



/*
Handles Variables from ./vars.js
*/
function handle_vars(client) {
  client.variables(require("../vars.js"))

}
module.exports={
  handle_vars
}