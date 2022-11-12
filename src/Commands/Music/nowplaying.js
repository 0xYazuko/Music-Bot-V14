const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "nowplaying",
        this.description = "Permets d'avoir des infos sur la musique en cours de lecture.",
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
    
        const track = queue.current;
    
        const embed = new EmbedBuilder();
    
        embed.setColor('#9B59B6');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor({ name: track.title, iconURL: interaction.user.displayAvatarURL({ size: 1024, dynamic: true }) });
    
        const methods = ['désactivé', 'track', 'queue'];
    
        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;
    
        embed.setDescription(`Volume **${queue.volume}**%\nDurée **${trackDuration}**\nMode répétition **${methods[queue.repeatMode]}**\nDemander par ${track.requestedBy}`);
    
        embed.setTimestamp();
        embed.setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        interaction.reply({ embeds: [embed] });
    }
}

module.exports = command