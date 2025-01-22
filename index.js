const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (message) => {
  const match = message.content.toLowerCase().match(/^\/roll d(\d+)$/);
  if (match) {
    const sides = parseInt(match[1], 10);
    if (!isNaN(sides)) {
      const result = rollDice(sides);
      message.reply(result.toString());
    }
  }
});

client.login(token);