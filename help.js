module.exports.run = {
    name: 'help',
    description: 'Montre toutes les commandes relatives au bot.',
    execute(client, message, args) {
        const {MessageEmbed} = require('discord.js')
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
            .setTitle('Liste des commandes du bot :')
            .setColor("RANDOM")
            .setDescription('Retrouvez ci-dessous toutes les commandes disponible via le bot :')
            .addField('*help', "Permet d'afficher ce message contenant toutes les commandes du bot.")
            .addField(`*avatar`, `Permet d'afficher son avatar en plus grand.`)
            .addField(`*ping`, `Pong !`)
            .addField(`*staff`, `Permet d'être redirigé vers le salon des recrutements !`)
            .addField(`salut`, `Permet au bot de vous souhaitez une bonne journée.`)
            .setFooter("Galaxy31 Inc.")

      message.channel.send(embed);
     }
    };