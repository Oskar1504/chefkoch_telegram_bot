module.exports = {
    async execute(bot,interaction) {
        const opts = {
            parse_mode:"HTML",
            new_chat_title:"schnelle-alltagskueche",
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Edit Text 1',
                            callback_data: 'ingredients'
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

        let  ingredients = [
            "1ELSonnenblumenöl oder Rapsöl",
            "4m.-großeKarotte(n)",
            "300mlKokosmilch (Soja-Kokosmilch)",
            "300mlGemüsebrühe",
            "½TLKurkuma",
            "½TLTandoori masala, ersatzweise Koreander, Kreuzkümmel, Knoblauch, Chili",
            "1TLIngwerwurzel, klein gehackt",
            "4Zehe/nKnoblauch, jung",
            "4Schalotte(n), mit Grün",
            "100mlWeißwein, trockener, guter",
            "1Kardamomkapsel(n), grün, aufgebrochen",
            "1Prise(n)Nelkenpulver",
            "2ELCreme (Schlagcreme), vegan",
            "1Prise(n)Pfeffer",
            "1Prise(n)Salz",
            "1SpritzerWorcestersauce",
            "1Prise(n)Chilifäden",
            "1HandvollKräuter, frisch"
        ]

        bot.sendMessage(interaction.chat.id, '<b>Ingredients</b>\n\nCategorie:<i>schnelle-alltagskueche</i>\n\n' + ingredients.join("\n- "), opts);
    },
};