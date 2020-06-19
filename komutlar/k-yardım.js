const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}moderasyon**`, `Moderasyon Komutlarını Gösterir`)
.addField(`» **${ayarlar.prefix}eğlence**`, `Eğlence Komutlarını Gösterir`)
.addField(`» **${ayarlar.prefix}gold**`, `Gold Üyelere Özel Komutları Gösterir`)
//.addField(`» **${ayarlar.prefix}kullanıcı**`, `Kullanıcıya Özel Komutları Gösterir`)
.setFooter('Belkıs')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'yardım', 'help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};