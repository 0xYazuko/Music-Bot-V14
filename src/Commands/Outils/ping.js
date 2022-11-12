const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "ping",
        this.description = "Permets de voir le ping du bot.",
        this.category = "⚙️ Outils",
        this.permission = "Aucune"
    }

    async execute(bot, interaction) {
        const PING = new EmbedBuilder()
            .setColor('#9B59B6')
            .setTitle('**Ping**')
            .setDescription("🏓 Pong")
            .addFields(
                { name: '🔧 - Latence :', value: `${bot.ws.ping}ms.` },
            )
            .setTimestamp()
            .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        interaction.reply({ embeds: [PING] });
    }
}

module.exports = command