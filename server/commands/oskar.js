module.exports = {
    async execute(bot,interaction) {
        const opts = {
            reply_to_message_id: interaction.message_id,
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Edit Text 1',
                            callback_data: 'edit-1'
                        },
                        {
                            text: 'Edit Text 2',
                            callback_data: 'edit-2'
                        }
                    ],
                    [
                        {
                            text: 'Edit Text 3',
                            callback_data: 'edit-3'
                        },
                        {
                            text: 'Edit Text 4',
                            callback_data: 'edit-2'
                        }
                    ]
                ]
            })
        };
        bot.sendMessage(interaction.chat.id, 'Original text', opts);
    },
};