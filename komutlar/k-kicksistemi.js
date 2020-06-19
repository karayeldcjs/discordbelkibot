const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {


const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}kick**`, `Kick Atamaya Yarar.`)
.addField(`» **${ayarlar.prefix}kick-rol**`, `Kick Atabilcek Rol ayarlar.`)
.addField(`» **${ayarlar.prefix}kicklog**`, `Kick Sisteminin Log'unu ayarlar.`)
.addField(`» **${ayarlar.prefix}kicklimit**`, `Kick Siteminin Kick atma limitini ayarlar.`)
.addField(`» **/kicklimitsıfırla**`, `Sunucu Sahibinin Komutudur Limiti Dolan Kişinin Limitini sıfırlar`)
.setFooter('💕 Belkıs 🌹')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ks', 'kick-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'kicksistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};