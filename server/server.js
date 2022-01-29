require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')
const axios = require('axios')


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});


bot.setMyCommands([
    {command:"week",description:"Browse recipes in this week "},
    {command:"daily_recipe",description: "show the RecipeOfTheDay"},
    {command:"led_on",description: "Turns led on"},
    {command:"led_off",description: "Turns led off"}
])


const eventFiles = fs.readdirSync(__dirname + '/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    bot.on(event.name, (...args) => event.execute(bot, ...args));
}


console.log(`${process.env.PROJECT_NAME} is running `)
axios({
    method:"post",
    url: "http://localhost:42015/app/register",
    data:{
        project_name: process.env.PROJECT_NAME,
        project_description: process.env.PROJECT_DESCRIPTION,
        project_port: process.env.PORT
    }
})
    .then(response => console.log(response.data.data))
    .catch(error => console.error(error.toString()))
