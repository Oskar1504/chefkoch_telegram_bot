require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});


bot.setMyCommands([{command:"week",description:"Browse recipes in this week "},{command:"daily_recipe",description: "show the RecipeOfTheDay"}])


const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./server/events/${file}`);
    bot.on(event.name, (...args) => event.execute(bot, ...args));
}
