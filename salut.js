module.exports = {
    name: 'salut',
    desciption: 'Dit bonjour à la personne qui execute la commande.',
    execute(message, args) {
        message.channel.send(`Bonjour à toi utilisateur ! Je te souhaite une agréable journée.`)
    }
}