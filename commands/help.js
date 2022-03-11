const Discord = require('discord.js')

module.exports = {
    run: (Client, message, args, tool) => {
        const embed = new Discord.MessageEmbed()
            .setColor(0)
    
        const commands = require('../storage/commands.json').commands
        var allCommands = ''
        commands.forEach(command => {
            allCommands += `**${command.name}** - ${command.desc}\n`
        })
    
        embed.addField('All commands :', allCommands, true)
    
        message.channel.send({embed})
    },
    "desc": "Returns all the commands"
}