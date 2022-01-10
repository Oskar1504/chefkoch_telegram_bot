module.exports = {
    name: 'callback_query',
    async execute(bot, interaction) {
        console.log("In callback_query event file")

        const callback_data = interaction.data
        if (!callback_data) return;
        try {
            const event = require(`../callbacks/${callback_data}`);
            await event.execute(bot, interaction)
            // console.debug(`[${this.name}]: ${interaction.commandName} by ${interaction.user.username}|${interaction.user.id} at ${interaction.createdAt}`)
        } catch (error) {
            console.error(error);
            await bot.sendMessage(interaction.message.chat.id, 'There was an error while executing this callback!');
        }
    },
};