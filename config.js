module.exports = {
    clients: {
        token: 'MTAwNzkyNDY1MjQ1NjI5MjM5Mg.GlIcui.nnLxFRl3ytjXdirzqhJtue-4KXZdJ5H8J7cORo',
        activity: 'Made by YazukoWeb',
        name: 'by YazukoWeb',
        logo: `https://media.discordapp.net/attachments/1009169820413071504/1040958763944923176/299881448_8497992610214740_3581498734036049100_n.jpg`
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
