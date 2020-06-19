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

    let kisi = message.mentions.users.first()
    let user = message.guild.member(kisi)
    let member = message.guild.member(message.author.id)
    let sebep = args.slice(1).join(' ');

    if (!kisi) return message.reply(`Etiket atmadın!`)
    
    if (!sebep) return message.reply(`Sebebini yazmadın!`)
    
    if (db.fetch(`bansayi_${message.author.id}`) >= banlimit) return message.reply(`Ban limitin doldu!, bir yetkili sıfırlayana kadar kullanamassın!`)
     
    message.channel.send(`${kisi}, ${member} tarafından banlandı.`)
      
    message.guild.channels.get(banlog).send(`${kisi}, ${member} tarafından ${sebep} sebebiyle banlandı.`)
    kisi.send(`Suncunudan banlandın\nSebep: ${sebep}`)
 
    message.guild.ban(user.id)
    db.add(`bansayi_${message.author.id}`, 1)

  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'taslak',
  usage: 'ban'
};