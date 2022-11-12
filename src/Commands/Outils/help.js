const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "help",
        this.description = "Permets de voir toutes les commandes disponibles.",
        this.category = "⚙️ Outils",
        this.permission = "Aucune"
    }

    async execute(bot, interaction) {
        const help = new EmbedBuilder()
            .setColor('#9B59B6')
            .setTitle('**Commandes disponibles**')
            .setImage("https://images-ext-1.discordapp.net/external/sQmWW3HzNlEFW1mV41yIbosDmF3V9mo-MSpzIepTTu4/https/media.tenor.com/0YAcRsZDwcUAAAPo/crazy-anime.mp4")
            .addFields(
                { name: 'help', value: `Permets de voir toutes les commandes disponibles.` },
            )
            .addFields(
                { name: 'ping', value: `Permets de voir le ping du bot.` },
            )
            .addFields(
                { name: 'back', value: `Permets de revenir à l'ancienne musique.` },
            )
            .addFields(
                { name: 'clearqueue', value: `Permets de supprimer la liste d'attente.` },
            )
            .addFields(
                { name: 'loop', value: `Permets de répéter la musique en cours de lécture.` },
            )
            .addFields(
                { name: 'nowplaying', value: `Permets d'avoir des infos sur la musique en cours de lecture.` },
            )
            .addFields(
                { name: 'pause', value: `Permets de mettre en pause la musique` },
            )
            .addFields(
                { name: 'play', value: `Permets de jouer de la musique` },
            )
            .addFields(
                { name: 'progress', value: `Permets de voir la progression de la musique.` },
            )
            .addFields(
                { name: 'queue', value: `Permets de voir la playlist en attente.` },
            )
            .addFields(
                { name: 'resume', value: `Permets de relancer la musique.` },
            )
            .addFields(
                { name: 'skip', value: `Permets de changer de son` },
            )
            .addFields(
                { name: 'stop', value: `Permets d'arrêter la musique.` },
            )
            .addFields(
                { name: 'volume', value: `Permets de modifier le volume de la musique.` },
            )

            .setTimestamp()
            .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        interaction.reply({ embeds: [help] });
    }
}

module.exports = command