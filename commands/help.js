const Discord = require('discord.js')

module.exports = {
    run: (Client, messageCreate, args, tool) => {
        const embed = new Discord.MessageEmbed().setColor(0)
    
        const commands = require('../storage/commands.json').commands
        var allCommands = ''
        commands.forEach(command => {
            allCommands += `**${command.name}** - ${command.desc}\n`
        })
    
        embed.addField('All commands :', allCommands, true)
    
        messageCreate.channel.send({embeds: [embed]})
    },
    "desc": "Returns all the commands"
}