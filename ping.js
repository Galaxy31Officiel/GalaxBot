module.exports = {
    name: 'ping',
    desciption: 'Le bot répond par "pong !".',
    execute(message, args) {
        message.channel.send(`Pong !`)
    }
}