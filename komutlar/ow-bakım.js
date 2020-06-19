const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
if(message.author.id !== "647167526022938635") return message.channel.send('Bu komutu sadece sahibim kullanabilir ❌')
  
  if(args[0] === "kapalı") {
let veri = await db.fetch(`botbakım`)
if(!veri) return message.channel.send('Anlaşılan bot zaten bakımda değil. ❌')
message.channel.send('Bot bakım modundan çıkarıldı.!')
db.delete(`botbakım`)    
  return
}
 
    
if(args[0] === "açık") {

  
  let codeming = args.slice(1).join(' ');
  let codemings; 
  codemings = 'Belkıs'
  if(!codeming) return message.channel.send('❌ Bir bakım sebebi girmelisin.')

  let yasin = new Discord.RichEmbed()
  .setTitle('<:cekic:712407521515667496> Bot Bakıma Alındı! <:cekic:712407521515667496>')
  .setDescription('Şu andan itibaren botu bakıma aldınız.Sizin dışında hiçbir kullanıcı siz bakımı kapayana kadar hiçbir bot komutunu kullanamayacak. \n\n **kapamak için:** /bakım kapat \n\n Botu kullanmaya çalışan kişilere `'+codeming+'` sebebi ile bakımda olduğumu belirteceğim.')
  .setColor('RED')
  .setFooter(codemings + ' Bot Bakım Sistemi')
message.channel.send(yasin)
  message.delete()
  db.set(`botbakım`, codeming)
 return
}
message.reply('bir değer belirtmelisin \n\n `açık` / `kapalı`')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'taslak', 
  usage: 'bakım'
};
 