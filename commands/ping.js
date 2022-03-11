const Discord = require('discord.js')

module.exports = {
    run: (Client, message, args, tool) => {
        var toSend = ""
        args.forEach(s => toSend += s + " ")
        const embed = new Discord.MessageEmbed()
            .setColor(255)
            .addField(`Message from ${message.author.tag} :`, toSend)
        message.channel.send('Your message!')
        message.channel.send({embed})
    },
    "desc": "Returns Pong!"
}