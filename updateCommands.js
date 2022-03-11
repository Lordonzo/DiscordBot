const commands = require('./storage/commands.json').commands,
    fs = require('fs')

exports.update = () => {
    var allCommandFiles = fs.readdirSync('./commands')
    allCommandFiles.forEach(commandFile => {
        const commandName = commandFile.split('.')[0]
        if (!commands.some(command => command.name === commandName)) {
            commands.push({
                name: commandName, 
                desc: require(`./commands/${commandFile}`).desc
            })
        }
        if (commands.some(command => command.name === commandName && command.desc !== require(`./commands/${commandFile}`).desc)) {
            commands[commands.findIndex(command => command.name === commandName)].desc = require(`./commands/${commandFile}`).desc
        }
        fs.writeFile('./storage/commands.json', JSON.stringify(require('./storage/commands.json')), function writeJSON(err) {
            if (err) return console.log(err.message)
        })
    })
}