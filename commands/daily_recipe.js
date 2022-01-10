const chefkoch_api = require("../helper/chefkoch_api")
const template = require("../helper/template")

module.exports = {
    async execute(bot,interaction) {

        let recipes = await chefkoch_api.getTodaysRecipes(),
            msg = ""

        for (const recipe of recipes) {
            msg += await template.compile("recipe_day.html", recipe) + "\n--------------------------------------\n"
        }

        const opts = {
            parse_mode: "HTML"
        };

        bot.sendMessage(interaction.chat.id,msg, opts);
    },
};