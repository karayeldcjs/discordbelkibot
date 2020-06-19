const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için yeterli yetkin yok!')

  let kanal = message.mentions.channels.first()
  
  if (!kanal) return message.reply(`Kanalı etiketlemedin!`)
  
  db.set(`mutelog_${message.guild.id}`, kanal.id)

  message.channel.send(`Mute kanalını ${kanal} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-log"],
  permLevel: 0
};

exports.help = {
  name: 'mutelog',
  description: 'taslak',
  usage: 'banlog'
};
