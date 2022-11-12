const { QueueRepeatMode } = require('discord-player');
const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "loop",
        this.description = "Permets de répéter la musique en cours de lécture.",
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

        const NULL_BOUCLE = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Vous devez d'abord désactiver la file d'attente en cours en mode boucle... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        if (!queue || !queue.playing) return interaction.reply({ embeds: [NULL] });
    
        if (queue.repeatMode === 2) return interaction.reply({ embeds: [NULL_BOUCLE] });
            
        const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(success ? `Mode répétition **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** la musique en cours sera répétée à l'infini 🔂` : `Quelque chose s'est mal passé... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        return interaction.reply({ embeds: [Good] });
    }
}

module.exports = command