const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Eğlence Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}nahçek**`, `İstediğiniz kişiye nah çeker`)
.addField(`» **${ayarlar.prefix}aşk**`, `İstediğiniz kişiyle aşkınızı ölçer`)
.addField(`» **${ayarlar.prefix}tokat**`, `Tokat Atarsın`)
.addField(`» **${ayarlar.prefix}kaçcm**`, `.d`)
.addField(`» **/arkadaşlık**`, `İstediğiniz kişiyle arkadaşlığınızı ölçer`)
.addField(`» **${ayarlar.prefix}adamol**`, `Adam olursun`)
//.addField(`» ****`, ``)
.addField(`» **/ağla**`, `Ağlarsın veya ağlatırısın.`)
.addField(`» **/reboot**`, `Botu Yeniden başlatmaya ne dersin`)
.addField(`» **/sev**`, `Kimi Seviyosun acaba.`)
.addField(`» **/öp**`, `Öpücük`)
.setFooter('Belkıs')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['e', 'fun', 'funny'], 
  permLevel: 0 
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};