const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)
   
    let kisi = message.mentions.users.first()
    let member = message.guild.member(message.author.id)
    let kicklog = db.fetch(`kickkanal_${message.guild.id}`);

    if (!kisi) return message.reply(`Etiket atmadın!`)
   
    db.set(`kicksayi_${kisi.id}`, 0)

    message.channel.send(`${kisi}, ${member} tarafından kick limitin sıfırlandı.`)        

    client.channels.get(kicklog).send(`${kisi}'nin kick limiti ${member} tarafından sıfırlandı.`)  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kicklimit-sıfırla", 'kicklimits', 'limit-sıfırla', 'kicklimitsil'],
  permLevel: 0
};

exports.help = {
  name: 'kicklimitsıfırla',
  description: 'taslak',
  usage: 'kicklimitsıfırla'
};