const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
let kadın = db.fetch(`kızrol_${message.guild.id}`);
let erkek = db.fetch(`erkekrol_${message.guild.id}`)
  let yetkili = db.fetch(`yetkili_${message.guild.id}`);
  let alincak = db.fetch(`alincak_${message.guild.id}`);
  let tag = db.fetch(`tag_${message.guild.id}`);
  if (!yetkili) return message.reply("Kayıt Sisteminin Kadın Rol'ü Ayarlanmamış :(")
  if (!kadın) return message.reply("Kayıt Sisteminin yetkili rölü Ayarlanmamış :(")
  if (!erkek) return message.reply('Kayıt Sisteminde Erkek Rolü ayarlanmamış :()')
  if (!alincak) return message.reply("Kayıt sisteminde Alınacak rol ayarlanmamış :(")
	if (!tag) return message.reply("Kayıt Sisteminde tag ayarlanmamış :(")
 if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

  let kanal = message.mentions.channels.first()
  
  if (!kanal) return message.reply(`Kanalı etiketlemedin!`)
  
  db.set(`kayıtk_${message.guild.id}`, kanal.id)
  db.set(`kayıtacik_${message.guild.id}`, 'acik')
  
  message.channel.send(`Hg kanalını ${kanal} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg-log"],
  permLevel: 0
};

exports.help = {
  name: 'hgkanal',
  description: 'taslak',
  usage: 'banlog'
};

