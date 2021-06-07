const { MessageEmbed } = require("discord.js")
// Paketler - Düzenlenebilir Kısım
const pack1 = require('../packs/pack-1.json');
const pack2 = require('../packs/pack-2.json');
// Paketler - Düzenlenebilir Kısım
let paket;

exports.run = async(client, message, args) => {
    const prefix = client.config.discord.prefix;
    const voiceChannel = message.member.voice.channel;
    const pack = args[0];
    const deger = parseInt(args[1]);
    if (!message.guild) return;
    if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setDescription('Sesli kanala girmelisin!'));
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(new MessageEmbed().setDescription(`Ses kanalınıza katılmak ve konuşmak için izinlere ihtiyacım var.`));
    }
    if(!pack) return message.channel.send(new MessageEmbed().setDescription(`Paket adı girmelisin! \nPaketler için: \`${prefix}packs\` \nÖrnek Kullanım: \`${prefix}play pack1 [1-20 arası değer]\` `));
    if(!deger) return message.channel.send(new MessageEmbed().setDescription(`Ses efekti seçmelisin\nÖrnek Kullanım: \`${prefix}play pack1 [1-20 arası değer]\``))
    if(deger < 1 || deger > 20 || isNaN(deger)) return message.channel.send(new MessageEmbed().setDescription(`1 ile 20 arasında değer giriniz.`))
// Düzenlenebilir Kısım
        if(pack === "pack1" || pack === "pack2") {
            if(pack === "pack1") { paket = pack1 }
            if(pack === "pack2") { paket = pack2 }
// Düzenlenebilir Kısım

            let connection = await voiceChannel.join()
            await connection.voice.setSelfDeaf(true);
            dispatcher = await connection.play(paket[deger]);
            dispatcher.setVolumeLogarithmic(100 / 100);
            const info = new MessageEmbed().setDescription(`Ses efekti oynatılıyor.. \n**Paket:** \`${pack}\` **Değer:** \`${deger}\``)
            message.channel.send(info).then(m => {
                    dispatcher.on('finish', () => {
                        m.react('✅')
                        dispatcher.destroy();
                    });
                })
            } else {
                return message.channel.send(new MessageEmbed().setDescription(`Seçtiğiniz paket bulunamadı.`))
            }
};

exports.help = {
    name: 'play',
    aliases: ['oynat'],
    usage: ['play/oynat [paket] [değer]'],
    description: ['Sound paketinden seçtiğiniz sesi oynatır.']
}