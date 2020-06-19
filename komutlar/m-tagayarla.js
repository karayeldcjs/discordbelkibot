const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

   if(!args[0]) return message.reply("**Tag** girmedin!")
   //if(isNaN(args[0])) return message.reply(`Limit sadece bir sayı olabilir.`);

   db.set(`tag_${message.guild.id}`, args[0])

  message.channel.send(`Tag \`${args[0]}\` olarak ayarlandı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tag'],
  permLevel: 0
};

exports.help = {
  name: 'tagayarla',
  description: 'taslak',
  usage: 'banlimit'

};