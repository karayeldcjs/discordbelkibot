const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
let kontrol = db.fetch(`codepack.rolkoruma_${message.guild.id}`)
let seçenek = args[0]
if(!seçenek) return message.channel.send(`:x: Bir seçenek belirtmelisin. \`aç, kapat\``)
if(seçenek === 'aç') {
if(kontrol) return message.channel.send(`:x: Rol koruma sistemi zaten açık.`)
message.channel.send(`Rol koruma sistemi başarıyla açıldı.`)
db.set(`codepack.rolkoruma_${message.guild.id}`, 'aktif')
} else if(seçenek === 'kapat') {
if(!kontrol) return message.channel.send(`:x: Rol koruma sistemi zaten kapalı.`)
message.channel.send(`Rol koruma sistemi başarıyla kapatıldı.`)
db.delete(`codepack.rolkoruma_${message.guild.id}`)
} else {
message.channel.send(`:x: Geçerli bir seçenek belirtmelisin.`)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolkoruma'],
  permLevel: 0
};

exports.help = {
  name: 'rol-koruma',
  description: 'Rol koruma sistemini açarsınız/kapatırsınız.',
  usage: 'rol-koruma <Aç/Kapat>'
};