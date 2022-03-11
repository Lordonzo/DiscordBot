/** Require Packages + Config */
const { Client, Intents } = require('discord.js'),
    config = require('./config.json'),
    bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]}),
    fs = require('fs')

/** Connexion du bot */
bot.on('ready', () => {
    console.log('Connected')
    bot.user.setActivity(`${config.prefix}help`)
    // Update les commandes
    require('./updateCommands').update()
})

/** Listener Event */
bot.on('messageCreate', message => {
    if (message.author.bot || !message.content.startsWith(config.prefix)) return

    let args = message.content.slice(config.prefix.length).trim().split(' ')
    let cmd = args.shift().toLowerCase()
    
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(bot, message, args)
    } catch (err) {
        console.log(err.message)
    } finally {
        console.log(`${message.author.tag} used the command ${config.prefix}${cmd}`)
    }
})



bot.login(config.token)