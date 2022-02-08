const vari = require("./variablehandler.js")
const cmd = require("./commandhandler.js")
const call = require("./callbackhandler.js")
const slash = require("./slashhandler.js")
const status = require("./statushandler.js")

/*
Combining Variable Handler and Command Handler into one handler. 
*/
function handler_main(client) {
  cmd.handle_commands(client);
  slash.handle_slash(client);//Handling commands. See commandhandler.js
  console.log("════════ ≪ LOADED COMMAND HANDLER ≫ ════════");
  vari.handle_vars(client);//Handling variables. See variablehandler.js.
  console.log("════════ ≪ LOADED VARIABLE HANDLER ≫ ════════");
  call.handle_callbacks(client);
  console.log("════════ ≪ LOADED CALLBACK HANDLER ≫ ════════");
  status.handle_status(client);//Handling variables. See variablehandler.js.
  console.log("════════ ≪ LOADED STATUS HANDLER ≫ ════════");
  client.readyCommand({
    channel: "",
    code: `$log[════════ ≪ Ready on $userTag[$clientID] ≫ ════════]

$log[════════ ≪ Bot By Bumblebee#1447 ≫ ════════]`
  })//ReadyCommand
  console.log("════════ ≪ MAIN HANDLER READY! ≫ ════════");
  

}

module.exports={ 
  handler_main
}
