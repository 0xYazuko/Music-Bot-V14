const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "progress",
        this.description = "Permets de voir la progression de la musique.",
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
    
        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        const NULL_LIVRE = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Jouer un live, pas de données à afficher 🎧`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        if (timestamp.progress == 'Infini') return interaction.reply({ embeds: [NULL_LIVRE] });

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`${progress} (**${timestamp.progress}**%)`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [Good] });
    }
}

module.exports = command