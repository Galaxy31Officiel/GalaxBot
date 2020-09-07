module.exports = {
    name: 'staff',
    desciption: 'Dirige la personne qui execute la commande vers le salon dédié aux recrutements.',
    execute(message, args) {
        message.channel.send(`Les informations concernant les recrutements Staff sont disponible dans le salon <#742481464649580639>`)
    }
}