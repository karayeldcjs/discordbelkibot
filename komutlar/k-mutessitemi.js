const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {


const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}mute**`, `Mute Atamaya Yarar.`)
.addField(`» **${ayarlar.prefix}muterol**`, `Mute Rol ayarlar.`)
.addField(`» **${ayarlar.prefix}muteyetkilirol**`, `Mute Atabilcek rolü ayarlar.`)
.addField(`» **/mutelog**`, `Mute Log ayarlar`)
.setFooter('💕 Belkıs 🌹')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ms', 'mute-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'mutesistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};