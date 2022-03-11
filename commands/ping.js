const Discord = require('discord.js')

module.exports = {
    run: (Client, messageCreate, args, tool) => {
        var toSend = "Pong!"
        messageCreate.interaction.send({content: `${toSend}`})
    },
    "desc": "Returns Pong!"
}