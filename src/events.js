const { EmbedBuilder } = require('discord.js');

module.exports = async (bot) => {
    player.on('error', (queue, error) => {
        console.log(`Erreur émise depuis la file d'attente : ${error.message}`);
    });
    
    player.on('connectionError', (queue, error) => {
        console.log(`Erreur émise par la connexion : ${error.message}`);
    });
    
    player.on('trackStart', (queue, track) => {
        if (!bot.config.opt.loopMessage && queue.repeatMode !== 0) return;

        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Je commence à jouer **${track.title}** dans **${queue.connection.channel.name}** 🎧`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        queue.metadata.send({ embeds: [Good] });
    });
    
    player.on('trackAdd', (queue, track) => {
        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription(`Le titre **${track.title}** as été ajouté dans la file d'attente ✅`)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        queue.metadata.send({ embeds: [Good] });
    });
    
    player.on('botDisconnect', (queue) => {
        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription('J\'ai été déconnecté manuellement du canal vocal, en supprimant la file d\'attente... ❌')
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        queue.metadata.send({ embeds: [Good] });
    });
    
    player.on('channelEmpty', (queue) => {
        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription('Personne n\'est dans le canal vocal, je quitte le canal vocal... ❌')
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        queue.metadata.send({ embeds: [Good] });
    });
    
    player.on('queueEnd', (queue) => {
        const Good = new EmbedBuilder()
        .setColor('#9B59B6')
        .setDescription('J\'ai fini de lire toute la file d\'attente ✅')
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        queue.metadata.send({ embeds: [Good] });
    });
}