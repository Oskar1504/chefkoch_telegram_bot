const WebSocket = require('ws');
let  wss = new WebSocket("ws://localhost:42082")

wss.onmessage = async function (event) {
    console.log(event.data.toString())
}
wss.onopen= async function (event) {
    wss.send(JSON.stringify({
        source:"telegram_bot",
        target:"website",
        type:"message",
        content:"Telegram bot connected"
    }))
}
wss.onclose = async function (event) {
    console.error("WS Con closed")
}


module.exports = {
    name: 'message',
    async execute(bot, interaction) {


        if(interaction.entities){
            if(interaction.entities.find(obj => {return obj.type === "bot_command"})){
                const command = interaction.text.split(" ")[0];
                if (!command) return;
                try {
                    const event = require(__dirname + `/../commands/${command}`);
                    await event.execute(bot, interaction, wss)
                    // console.debug(`[${this.name}]: ${interaction.commandName} by ${interaction.user.username}|${interaction.user.id} at ${interaction.createdAt}`)
                } catch (error) {
                    console.error(error);
                    await bot.sendMessage(interaction.chat.id, 'There was an error while executing this command!');
                }
            }
        }
    },
};