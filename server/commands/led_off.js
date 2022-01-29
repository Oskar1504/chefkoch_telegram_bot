module.exports = {
    async execute(bot, interaction, wss) {
        wss.send(JSON.stringify({
            source:"telegram_bot",
            target:"esp_1",
            type:"updatePin",
            pin:"pinD1",
            pin_status:"0"
        }))
        const opts = {
            reply_to_message_id: interaction.message_id
        };
        bot.sendMessage(interaction.chat.id, 'Led turned off.', opts);
    },
};