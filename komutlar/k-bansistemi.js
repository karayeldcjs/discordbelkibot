const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {


const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}ban**`, `Ban Atamaya Yarar.`)
.addField(`» **${ayarlar.prefix}ban-rol**`, `Ban Atabilcek Rol ayarlar.`)
.addField(`» **${ayarlar.prefix}banlog**`, `Ban Sisteminin Log'unu ayarlar.`)
.addField(`» **${ayarlar.prefix}banlimit**`, `Ban Siteminin Ban atma limitini ayarlar.`)
.addField(`» **/banlimitsıfırla**`, `Sunucu Sahibinin Komutudur Limiti Dolan Kişinin Limitini sıfırlar`)
.setFooter('💕 Belkıs 🌹')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bs', 'ban-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'bansistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};