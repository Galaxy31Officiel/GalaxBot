const fs = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(client.commands);
}


client.on('ready', () => {
  console.log(`Le bot ${client.user.tag} est bien connecté !`);
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    console.log(args);
    const command = args.shift().toLowerCase();
    console.log(command);

    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(message, args);
  }
);






client.login(TOKEN);