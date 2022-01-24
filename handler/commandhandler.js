const aoijs = require("aoi.js")



/*
Handles commands in ./commands/ folder.
*/
function handle_commands(client) {
  const loader = new aoijs.LoadCommands(client);
  loader.load(client.cmd,'./commands/');

}

module.exports={
  handle_commands
}