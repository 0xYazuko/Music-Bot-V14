const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "back",
        this.description = "Permets de revenir à l'ancienne musique.",
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
        .setDescription(`Il n'y avait pas de musique jouée avant... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        if (!queue || !queue.playing) return interaction.reply({ embeds: [NULL] });
    
        if (!queue.previousTracks[1]) return interaction.reply({ embeds: [NULL_QUEUE] });
    
        await queue.back();

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Je joue l'ancien son ✅`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [Good] });
    }
}

module.exports = command