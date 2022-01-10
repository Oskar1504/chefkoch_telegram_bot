module.exports = {
    name: 'message',
    async execute(bot, interaction) {


        if(interaction.entities){
            if(interaction.entities.find(obj => {return obj.type === "bot_command"})){
                const command = interaction.text.split(" ")[0];
                if (!command) return;
                try {
                    const event = require(`./server/commands/${command}`);
                    await event.execute(bot, interaction)
                    // console.debug(`[${this.name}]: ${interaction.commandName} by ${interaction.user.username}|${interaction.user.id} at ${interaction.createdAt}`)
                } catch (error) {
                    console.error(error);
                    await bot.sendMessage(interaction.chat.id, 'There was an error while executing this command!');
                }
            }
        }
    },
};