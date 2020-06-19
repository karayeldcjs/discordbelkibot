const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış 🙂`)
}
  db.delete(`reklamK_${message.channel.id}`)
  message.reply(`Bu özellik **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklamkapat',
  description: 'sayaç', 
  usage: 'sayaç'
};