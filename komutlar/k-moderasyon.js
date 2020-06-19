const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Moderasyon Yardım Menüsü ')
.setTimestamp()
.addField(`» **${ayarlar.prefix}ban-sistemi**`, `Ban Sistemini Gösterir.`)
.addField(`» **${ayarlar.prefix}kick-sistemi**`, `Kick Sistemini Gösterir.`)
.addField(`» **${ayarlar.prefix}kayıt-sistemi**`, `Kayıt Sistemini Gösterir.`)
//.addField(`» **${ayarlar.prefix}jail-sistemi**`, `Jail Sistemini Gösterir.`)
.addField(`» **${ayarlar.prefix}sil**`, `Chat'i Temizlemeye Yarar.`)
//.addField(`» **${ayarlar.prefix}engel**`, `Sunucu Sahibi Kullanabilir kullanıcu engellersiniz eğer engellenen bir kullanıcı varsa sunucuya tekrardan girerse banlanır.`)
.addField(`» **/slowmode**`, `Kanalda Yavaş Mod açar.`)
.addField(`» **/rolrengi**`, `Belirtilen Rolun rengini değiştiri.`)
.addField(`» **/reklamengel**`, `Reklam Engel sistemini açar.`)
/*.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)
.addField(`» ****`, ``)*/

.setFooter('Belkıs')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};