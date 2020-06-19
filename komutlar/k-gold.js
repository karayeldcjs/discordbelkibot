const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}gold-s**`, `Gold Üyeliğinizi Sorgular`)
.setFooter('Belkıs')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['paket', 'g', 'goldd'], 
  permLevel: 0 
};

exports.help = {
  name: 'gold',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};