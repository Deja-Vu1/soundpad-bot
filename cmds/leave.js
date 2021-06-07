const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    if (!message.guild) return;
    if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setDescription('Sesli kanala girmelisin!'));
    voiceChannel.leave();
    message.react('👍')
};


exports.help = {
    name: 'leave',
    aliases: [],
    usage: ['leave'],
    description: ['Sesli kanaldan ayrılır.']
}