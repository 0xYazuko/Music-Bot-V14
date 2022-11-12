const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "clearqueue",
        this.description = "Permets de supprimer la liste d'attente.",
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

        const NULL_QUEUE = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Pas de musique dans la file d'attente après celle en cours... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        if (!queue || !queue.playing) return interaction.reply({ embeds: [NULL] });
    
        if (!queue.tracks[0]) return interaction.reply({ embeds: [NULL_QUEUE] });
    
        await queue.clear();

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`La file d'attente vient d'être vidée 🗑️`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [Good] });
    }
}

module.exports = command