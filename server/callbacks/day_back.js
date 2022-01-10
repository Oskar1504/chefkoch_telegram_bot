const chefkoch_api = require("../helper/chefkoch_api")
const template = require("../helper/template")
const Week = require("../helper/week")

module.exports = {
    async execute(bot,interaction) {

        let day_format_area = interaction.message.entities.find( e => e.type == "underline"),
            day_str = interaction.message.text.substr(day_format_area.offset,day_format_area.length),
            day = Week.dayToNum(day_str) - 1

        if(day <= 0){
            day = 7
        }
        day--

        let recipes = await chefkoch_api.getWeekRecipes(interaction.data)
        let msg = await template.compile("recipe_day.html", recipes[day])

        const opts = {
            chat_id: interaction.message.chat.id,
            message_id: interaction.message.message_id,
            parse_mode: "HTML",
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Back',
                            callback_data: 'day_back'
                        },
                        {
                            text: 'Categories',
                            callback_data: 'week'
                        },
                        {
                            text: 'Forward',
                            callback_data: 'day_forward'
                        }
                    ]
                ]
            })
        };
        bot.editMessageText(msg, opts);
    },
};