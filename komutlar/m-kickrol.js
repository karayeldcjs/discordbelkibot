const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

  let rol = message.mentions.roles.first()
  
  if (!rol) return message.reply(`Rolü etiketlemedin!`)

  db.set(`kickrol_${message.guild.id}`, rol.id)

  message.channel.send(`Kick rolü ${rol} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick-rol"],
  permLevel: 0
};

exports.help = {
  name: 'kickrol',
  description: 'taslak',
  usage: 'kickrol'
};