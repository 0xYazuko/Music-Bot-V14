const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "skip",
        this.description = "Permets de passer la musique actuelle.",
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
    
        const success = queue.skip();

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(success ? `Musique actuelle ${queue.current.title} passer ✅` : `Quelque chose s'est mal passé... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        return interaction.reply({ embeds: [Good] });
    }
}

module.exports = command