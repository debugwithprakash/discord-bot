
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', (message) => {

    if (message.author.bot) return;

    const command = message.content.toLowerCase();

    // Custom commands
    switch (command) {

        case 'about':
            message.reply('I am a custom Discord bot created using JavaScript!');
            break;

        case 'creator':
            message.reply('My creator is Prakash Kumar 🚀');
            break;

        case '!github':
            message.reply('GitHub: https://github.com/debugwithprakash');
            break;

        case 'youtube':
            message.reply('Welcome to my YouTube channel!');
            break;

        case 'hello':
            message.reply(`Hello ${message.author.username}! 👋`);
            break;

        default:
            break;
    }
});

client.login(process.env.TOKEN);
