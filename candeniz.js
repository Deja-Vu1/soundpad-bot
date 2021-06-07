const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client();
client.config = require('./config');
const prefix = client.config.discord.prefix;
const fs = require("fs");
client.login(client.config.discord.token).catch(err => {console.error("Geçersiz token.")});
const express = require("express"); const app = express(); app.listen(process.env.PORT || 7000);

  client.on('ready', async () => {
    client.user.setStatus("online");
    client.user.setActivity(`❤️ Candeniz`, { type: 1});
    console.log('Bot online!')
  });

  client.on('message', async message => {
    let client = message.client;
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(' ')[0].slice(prefix.length);
    let params = message.content.split(' ').slice(1);
    let cmd;
      if (client.commands.has(command)) {
        cmd = client.commands.get(command);
      } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
      }
      if (cmd) {
        cmd.run(client, message, params);
      }
  });

  client.commands = new Collection();
  client.aliases = new Collection();

  fs.readdir("./cmds/", (err, files) => {
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let cmd = require(`./cmds/${file}`);
      client.commands.set(cmd.help.name, cmd);
      if (cmd.help.aliases) {
        cmd.help.aliases.forEach((alias) => {
          client.aliases.set(alias, cmd.help.name);
        });
      }
    });
  });

  client.on('message', async message => {
    if(!message.guild) return
    if (message.content === `<@!${client.user.id}>`) {
      message.channel.send(new MessageEmbed().setDescription(`${message.author} \n Prefixim: **${prefix}** \nKomutlar için: **${prefix}yardım**`))
    }
  });