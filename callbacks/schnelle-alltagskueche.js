const chefkoch_api = require("../helper/chefkoch_api")
const template = require("../helper/template")

module.exports = {
    async execute(bot,interaction) {

        let recipes = await chefkoch_api.getWeekRecipes(interaction.data)
        let msg = await template.compile("recipe_day.html", recipes[0])

        const opts = {
            chat_id: interaction.message.chat.id,
            message_id: interaction.message.message_id,
            parse_mode: "HTML"
        };

        console.log(interaction.data)
        // bot.editMessageText(msg, opts);
        bot.sendMessage(interaction.message.chat.id,msg, opts);
    },
};