const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {


const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Kayıt Sisteminin Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}erkek**`, `Erkek kişileri kayıt etmeye yarar.`)
.addField(`» **${ayarlar.prefix}kız**`, `Kadın kişileri kayıt etmeye yarar.`)
.addField(`» **${ayarlar.prefix}erkekrol**`, `Kayıt sisteminin Erkek rolünü ayarlar.`)
.addField(`» **${ayarlar.prefix}kızrol**`, `Kayıt sisteminin Kız rolünü ayarlar.`)
.addField(`» **/yetkilirol**`, `Kayıt Sisteminin yetkili rolünü ayarlar`)
.addField(`» **/alınacakrol**`, `Kayıt Sistemini alıncak rölü ayarlar`)
.addField(`» **/tagayarla**`, `Kayıt Yapılırken ismin başına koyulcak tagı ayarlar`)
.addField(`» **/hgkanal**`, `Kayıt Sisteminin Hg kanalını ayarlar`)
.setFooter('💕 Belkıs 🌹')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ks', 'kayıt-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};