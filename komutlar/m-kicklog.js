const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

  let kanal = message.mentions.channels.first()
  
  if (!kanal) return message.reply(`Kanalı etiketlemedin!`)
  
  db.set(`kickkanal_${message.guild.id}`, kanal.id)

  message.channel.send(`Kick kanalını ${kanal} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick-log"],
  permLevel: 0
};

exports.help = {
  name: 'kicklog',
  description: 'taslak',
  usage: 'kicklog'
};