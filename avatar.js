module.exports = {
    name: 'avatar',
    desciption: 'Nous montre notre photo de profil en plus grand',
    execute(message, args) {
        message.channel.send(message.author.displayAvatarURL());
    }
}