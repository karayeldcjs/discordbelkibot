const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  let kicklimit = db.fetch(`kicklimit_${message.guild.id}`);
  let kickrol = db.fetch(`kickrol_${message.guild.id}`);
  let kicklog = db.fetch(`kickkanal_${message.guild.id}`);

  if (!kicklog) return message.reply("Kick Sisteminin Log'u Ayarlanmamış")
  if (!kickrol) return message.reply("Kick Sisteminin Rol'ü Ayarlanmamış")
  if (!kicklimit) return message.reply("Kick Sisteminin Limit'i Ayarlanmamış")

 if(!message.member.roles.has(kickrol)) return message.reply("Kick rolün yok!")
    
 if (message.member.roles.has(kickrol)) {

    let kisi = message.mentions.users.first()
    let user = message.guild.member(kisi)
    let member = message.guild.member(message.author.id)
    let sebep = args.slice(1).join(' ');

    if (!kisi) return message.reply(`Etiket atmadın!`)
    
    if (!sebep) return message.reply(`Sebebini yazmadın!`)
    
    if (db.fetch(`kicksayi_${message.author.id}`) >= kicklimit) return message.reply(`Kick limitin doldu!, bir yetkili sıfırlayana kadar kullanamassın!`)
     
    message.channel.send(`${kisi}, @${member} tarafından atıldı.`)
      
    message.guild.channels.get(kicklog).send(`${kisi}, ${member} tarafından ${sebep} sebebiyle atıldı.`)
                
 
    message.guild.member(kisi).kick();
    db.add(`kicksayi_${message.author.id}`, 1)

  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'taslak',
  usage: 'kick'
};