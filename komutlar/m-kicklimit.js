const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

   if(!args[0]) return message.reply("Limiti girmedin!")
   if(isNaN(args[0])) return message.reply(`Limit sadece bir sayı olabilir.`);

   db.set(`kicklimit_${message.guild.id}`, args[0])

  message.channel.send(`Kick limiti \`${args[0]}\` sayısına ayarlandı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kick-limit'],
  permLevel: 0
};

exports.help = {
  name: 'kicklimit',
  description: 'taslak',
  usage: 'kicklimit'

};