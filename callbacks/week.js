module.exports = {
    async execute(bot,interaction) {
        const opts = {
            chat_id: interaction.message.chat.id,
            message_id: interaction.message.message_id,
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Gesunde Ernährung',
                            callback_data: 'gesunde-ernaehrung'
                        },
                        {
                            text: 'Vegetarische Vielfalt',
                            callback_data: 'vegetarische-vielfalt'
                        }
                    ],
                    [
                        {
                            text: 'Schnelle Alltagsküche',
                            callback_data: 'schnelle-alltagskueche'
                        },
                        {
                            text: 'Low Carb',
                            callback_data: 'low-carb'
                        }
                    ]
                ]
            })
        };
        bot.editMessageText('TODO Select an Categorie', opts);
    },
};