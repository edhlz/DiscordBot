require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, readyClient => {
	console.log(`Ligado em: ${readyClient.user.tag}`);
});

client.login(token);
