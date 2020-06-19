const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

 const davet = new Discord.RichEmbed()
  .setTitle('Vay Botu Davet Etcen demek Muah')
  .setDescription(`**[BOTU DAVET ETMEK İÇİN TIKLA](https://discordapp.com/oauth2/authorize?client_id=716636363662819369&scope=bot&permissions=8)**`)
message.channel.send(davet)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'sayaç', 
  usage: 'sayaç'
};