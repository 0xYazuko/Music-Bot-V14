const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "pause",
        this.description = "Permets de mettre la musique en pause.",
        this.category = "🔊 Music",
        this.permission = "Aucune"
    }

    async execute(bot, interaction) {
        const queue = player.getQueue(interaction.guild.id);

        const NULL = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Aucune musique en cours de lecture... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        if (!queue) return interaction.reply({ embeds: [NULL] });
    
        const success = queue.setPaused(true);

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(success ? `Musique actuelle ${queue.current.title} mise en pause ✅` : `Quelque chose s'est mal passé... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        return interaction.reply({ embeds: [Good] });
    }
}

module.exports = command