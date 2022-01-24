# An Advanced AOI.JS v5 Command Handler With Dashboard!
## DO NOT use the code before reading this FULLY!!

Recomended host: [replit](https://replit.com).

Language: Bash

Credits: Leref for the node v16 on replit.

## Setup:
###
- Go to `config.json`. 
- Under `bot_prefix` add your bot prefix.
- Under `bot_description` add your bot description. (Basically info which will show on the website.)
- In your `.env` under the name "TOKEN" add your bot token.
- Run the code.
## Editing The Code:
### Adding callbacks:
- Go to `callbacks.json`.
```json
{
  "callbacks":["bot.onMessage()","bot.onInteractionCreate()"]
}
```
- In "callbacks" json, add your callbacks. For more details go to [the documentation.](https://aoi.leref.ga/v/aoi.js-v5/callbacks)

### Adding variables:
- Go to `vars.js`.
```js
module.exports={
  dev:"Bumblebee#1447",
  /*
  Adding Variables: to add variables just do `<variable name> : "<variable value>",`
  */
}
```
- Add `(variable name):"(variable value)",`
### Adding Commands:
- Go to `./commands/message commands/` folder.
- Create a new js file. eg: "ban.js"
- Add your code there. For eg:
```js
module.exports ={
name:"ban",//command name
aliases:["bon"],//command alias
code:`
$title[1;BONNED!!]
$description[1;banned $userTag[$mentioned[1]]]
$ban[$mentioned[1];Banned By $userTag[$authorID]]`//code
}

```
### Creating Slash Commands:
- Go to `slash.json` file.
- Add your slash command code there. For more info read the docs [here](https://aoi.leref.ga/v/aoi.js-v5/guide/advanced-guides/slash-commands).
- Example:
```json
{
  "slash":["$createApplicationCommand[858378652235071498;ping;ping pong ding dong🏓;true]","$createApplicationCommand[858378652235071498;hi;Say hi!;true]"]
}
```
### Replying To The Slash Commands:
- Go to `./commands/slash commands/` folder.
- Create a new js file. eg: "hi.js"
- Add your code there. For eg:
```js
module.exports = ({
name: "hi",
type: "interaction",
prototype: "slash",
code: `$interactionReply[Hi <@$interactionData[author.id]> !;{newEmbed:{title:Hello!}{description:Hey man! Wassup?!}}]`

})

```

## Website
Website Code is in `./website/dash.js`.
You can change the code in variable "a".
## Having Node V16 issues? 
### paste this in shell:
```
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH

```
## To Do:
- [X] Add Slash Commands Handler.
- [X] Add A Basic Website Dashboard.
## More Features Comming soon!
## Made By: `Bumblebee#1447` on [discord.](https://discord.com/users/818377414367379487)
# Please don't copy this code without giving credits. It has taken me lots of time and effort to make it and a star would mean a lot to me!

