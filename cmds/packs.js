const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
    const prefix = client.config.discord.prefix;
    if (!message.guild) return;
    let pack = args[0];

    if(!pack) {
        return message.channel.send(new MessageEmbed().setDescription(`
        **Sound Packs**

        \`pack1\`: Karışık Sound Paketi
        \`pack2\`: Boş Sound Paketi
        
        Paket içeriği hakkıda bilgi için: \`${prefix}packs [paket adı]\`
        Örnek Kullanım: \`${prefix}packs pack2\`
        `))
    }
    if(pack === "pack1" || pack === "pack2") {
        if(pack === "pack1") {
            message.channel.send(new MessageEmbed().setDescription(`
            **${pack}** - Sound Paketi

            **1** • \`4 Aydır Vurduruyorum - Hype\`
            **2** • \`Ağır Topum - Hype\`  
            **3** • \`Windows XP Bass\` 
            **4** • \`Yaşasın Irkımız Bass\` 
            **5** • \`Akasya Durağı Şaşırma\` 
            **6** • \`Bana Para Ver - Aykut Elmas\` 
            **7** • \`Ooooooooooo\` 
            **8** • \`Windows XP Error\` 
            **9** • \`Ehee - Aykut Elmas\` 
            **10** • \`Barabaraberebere waka waka\` 
            **11** • \`Keloğlan Geçiş\` 
            **12** • \`Lan Caz Yapma - Kuzey Tekinoğlu\` 
            **13** • \`Olum Gel Buraya Kırmızı Şortli\` 
            **14** • \`Tek Tek Tek\` 
            **15** • \`Yarraa\` 
            **16** • \`Am sori hee\` 
            **17** • \`Merhabaa - Kız\` 
            **18** • \`Napıyorsun - Kız\` 
            **19** • \`Kimsiniz Lan - Kolpaçino\` 
            **20** • \`Marda Tone Tefankardo\` 

            `))
        }

        if(pack === "pack2") {
            message.channel.send(new MessageEmbed().setDescription(`
            **${pack}** - Sound Paketi

            **1** • \`Boş\`
            **2** • \`Boş\`
            **3** • \`Boş\`
            **4** • \`Boş\`
            **5** • \`Boş\`
            **6** • \`Boş\` 
            **7** • \`Boş\` 
            **8** • \`Boş\` 
            **9** • \`Boş\` 
            **10** • \`Boş\` 
            **11** • \`Boş\`
            **12** • \`Boş\`
            **13** • \`Boş\`
            **14** • \`Boş\`
            **15** • \`Boş\`
            **16** • \`Boş\`
            **17** • \`Boş\`
            **18** • \`Boş\` 
            **19** • \`Boş\`
            **20** • \`Boş\` 
            `))
        }
    } else { 
        return message.channel.send(new MessageEmbed()
        .setDescription(`Seçtiğiniz paket bulunamadı.`)
    )}
      

};


exports.help = {
    name: 'packs',
    aliases: ['paketler','paket','pack'],
    usage: ['packs <[paket adı] [değer]>'],
    description: ['Sound paketlerini ve içeriğini gösterir.']
}