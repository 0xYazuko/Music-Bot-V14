const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "queue",
        this.description = "Permets de voir la playlist en attente.",
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

        const NULL_QUEUE = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Pas de musique dans la file d'attente après celle en cours... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        if (!queue.tracks[0]) return interaction.reply({ embeds: [NULL_QUEUE] });
    
        const embed = new EmbedBuilder();
    
        embed.setColor('#9B59B6');
        embed.setThumbnail(interaction.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor({ name: queue.current.title, iconURL: interaction.user.displayAvatarURL({ size: 1024, dynamic: true }) });
    
        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (demander par : ${track.requestedBy.username})`);
    
        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `et **${songs - 5}** autres sons...` : `Dans la playlist **${songs}** sons...`;
    
        embed.setDescription(`${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);
    
        embed.setTimestamp();
        embed.setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [embed] });
    }
}

module.exports = command