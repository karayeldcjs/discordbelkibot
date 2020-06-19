const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

 let banlimit = db.fetch(`banlimit_${message.guild.id}`);
  let banrol = db.fetch(`banrol_${message.guild.id}`);
  let banlog = db.fetch(`bankanal_${message.guild.id}`);

  if (!banlog) return message.reply("Ban Sisteminin Log'u Ayarlanmamış")
  if (!banrol) return message.reply("Ban Sisteminin Rol'ü Ayarlanmamış")
  if (!banlimit) return message.reply("Ban Sisteminin Limit'i Ayarlanmamış")

  if(!message.member.roles.has(banrol)) return message.reply("Ban rolün yok!")
  
  if (message.member.roles.has(banrol)) {

  let kisi = args[0]
  let member = message.guild.member(message.author.id)

   if (!kisi) return message.reply(`İdyi Girmedin`)
   
   message.channel.send(`${kisi}'nin, banı ${member} tarafından açıldı.`)

   message.guild.channels.get(banlog).send(`${kisi}'nin, banı ${member} tarafından açıldı.`)
      
   message.guild.unban(kisi)

  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unban"],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Ban Kaldırma.',
  usage: 'unban'
};