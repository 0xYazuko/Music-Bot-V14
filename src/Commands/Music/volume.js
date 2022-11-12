const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "volume",
        this.description = "Permets de modifier le volume de la musique.",
        this.category = "🔊 Music",
        this.permission = "Aucune",
        this.options = [
            { 
                type: 10,
                name: "vol", 
                description: "Volume.", 
                required: true 
            },
        ]
    }

    async execute(bot, interaction) {
        const maxVol = bot.config.opt.maxVol;

        const queue = player.getQueue(interaction.guild.id);

        const NULL = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Aucune musique en cours de lecture... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        if (!queue || !queue.playing) return interaction.reply({ embeds: [NULL] });
    
        const vol = interaction.options.getNumber('vol');

        const NULL_DEJA = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Le volume que vous souhaitez modifier est déjà celui en cours"... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        if (queue.volume === vol) return interaction.reply({ embeds: [NULL_DEJA] });

        const NULL_MAX = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Le nombre spécifié n'est pas valide. Entrez un nombre entre **1** et **${maxVol}**"... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        if (vol < 0 || vol > maxVol) return interaction.reply({ embeds: [NULL_MAX] });
    
        const success = queue.setVolume(vol);

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(success ? `Le volume à été modifier par **${vol}**/**${maxVol}**% 🔊` : `Quelque chose s'est mal passé"... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        return interaction.reply({ embeds: [Good] });
    }
}

module.exports = command