module.exports = {
    async execute(bot,interaction) {

        const opts = {
            chat_id: interaction.message.chat.id,
            message_id: interaction.message.message_id,
        };

        console.log(interaction)
        bot.editMessageText("Edit 1", opts);
    },
};