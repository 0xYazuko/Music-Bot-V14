const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "stop",
        this.description = "Permets d'arrêter la musique.",
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

        if (!queue || !queue.playing) return interaction.reply({ embeds: [NULL] });
    
        queue.destroy();

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`La musique s'est arrêtée sur ce serveur, à la prochaine ✅`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [Good] });
    }
}

module.exports = command