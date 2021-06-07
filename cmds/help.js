const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
    const prefix = client.config.discord.prefix;
    
    if (!args[0]) {
        const yardım = new MessageEmbed()
            .setDescription(` 
      **• ${prefix}packs:** Sound paketlerini ve içeriğini gösterir.
      **• ${prefix}play:** Sound paketinden seçtiğiniz sesi oynatır.
      **• ${prefix}leave:** Sesli kanaldan ayrılır.

      **Yardım**
      Bir komut hakkında bilgi almak için \`${prefix}yardım [komut]\`
      `)
            .addField("• Bağlantılar", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36719680&scope=bot)`, false)
        return message.channel.send(yardım);
    }
    //Komut Bilgi
    else {
        let commands = args[0];
        if (client.commands.has(commands)) {
            commands = client.commands.get(commands);
            const komutbilgi = new MessageEmbed()
                .setAuthor("• Yardım")
                .addField("Komut",`${commands.help.name}`)
                .addField("Açıklama",`${commands.help.description}`)
                .addField("Kullanım",` \`${commands.help.usage}\` `)

            message.channel.send(komutbilgi);
        }
    }
    //Komut Bilgi
};


exports.help = {
    name: 'yardım',
    aliases: ['help'],
    usage: ['yardım/help <komut>'],
    description: ['Yardım menülerini ve komut kullanımlarını gösterir.']
}