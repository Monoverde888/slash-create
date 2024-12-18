### With [discord.js](https://github.com/discordjs/discord.js)
```js
const { SlashCreator, GatewayServer } = require('slash-create');
const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path');
const creator = new SlashCreator({
  applicationID: '12345678901234567',
  publicKey: 'CLIENT_PUBLIC_KEY',
  token: 'BOT_TOKEN_HERE',
  client
});

creator
  .withServer(
    new GatewayServer(
      (handler) => client.ws.on('INTERACTION_CREATE', handler)
    )
  );

await creator.registerCommandsIn(path.join(__dirname, 'commands'));

await creator.syncCommands();

client.login('BOT_TOKEN_HERE');
```
### With [eris](https://github.com/abalabahaha/eris)
```js
const { SlashCreator, GatewayServer } = require('slash-create');
const Eris = require('eris');
const client = new Eris('BOT_TOKEN_HERE');
const path = require('path');
const creator = new SlashCreator({
  applicationID: '12345678901234567',
  publicKey: 'CLIENT_PUBLIC_KEY',
  token: 'BOT_TOKEN_HERE',
  client
});

creator
  .withServer(
    new GatewayServer(
      (handler) => client.on('rawWS', (event) => {
        if (event.t === 'INTERACTION_CREATE') handler(event.d);
      })
    )
  )

await creator.registerCommandsIn(path.join(__dirname, 'commands'));

await creator.syncCommands();

client.connect();
```
