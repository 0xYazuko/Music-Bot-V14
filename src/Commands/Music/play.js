const { QueryType } = require('discord-player');
const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "play",
        this.description = "Permets de démarrer une musique.",
        this.category = "🔊 Music",
        this.permission = "Aucune",
        this.options = [
            { 
                type: 3, 
                name: "music", 
                description: "Musique.", 
                required: true 
            },
        ]
    }

    async execute(bot, interaction) {
        const args = interaction.options.getString('music')

        const res = await player.search(args, {
            requestedBy: interaction.member,
            searchEngine: QueryType.AUTO
        });

        const NULL = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Aucun résultat trouvé... ❌`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        if (!res || !res.tracks.length) return interaction.reply({ embeds: [NULL] });
    
        const queue = await player.createQueue(interaction.guild, {
            metadata: interaction.channel
        });
    
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            await player.deleteQueue(interaction.guild.id);

            const NULL_JOIN = new EmbedBuilder()
            .setColor('#9B59B6')
            .setDescription(`Je ne peux pas rejoindre le salons... ❌`)
            .setTimestamp()
            .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

            return interaction.reply({ embeds: [NULL_JOIN] });
        }

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Chargement ${res.playlist ? 'de la playlist' : 'du son'}... 🎧`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});
    
        await interaction.reply({ embeds: [Good] });
    
        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);
    
        if (!queue.playing) await queue.play();
    }
}

module.exports = command