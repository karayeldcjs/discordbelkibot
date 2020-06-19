const Discord = require('discord.js');
const ms = require("ms");
const db = require('quick.db')
const moment = require("moment")
exports.run = async(client, message, args) => { 
let başlangıç = await db.fetch(`bsorgu_${message.author.id}`)
let bitiş = db.fetch(`bitissorgu_${message.author.id}`)
let s = await db.fetch(`baslangic_${message.author.id}`)  
let x = await db.fetch(`goldsure_${message.author.id}`)  





if(!başlangıç) {

  message.react('❌')
  
  let yok = new Discord.RichEmbed()
  .setTitle(':x: Gold Üyelik Bulunamadı! :(')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('🌹 Şu anda geçerli bir Altın Üyeliğiniz yok. Mevcut Gold üyeliğinizin süresi dolmuş olabilir.')
  .setFooter('👉 Belkıs 👈')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
 message.channel.send(yok).then(t => t.delete(15000))
  return
}


message.react('🌈')
message.reply('**DM** Kontrol et').then(m => m.delete(4000))  





  let sorgu = new Discord.RichEmbed()
  .setTitle(':star: Üyelik Durumunuz :star:')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('🔱 Altın Üyeliğiniz, aşağıda belirtilen sürenin sonunda otomatik olarak sonlandırılacaktır. Altın Üyeliğiniz sona erene kadar yararlanabilirsiniz.')
  .addBlankField()
  .addField('🕐 Başlangıç Tarihi', '**'+başlangıç+'**')
  .addField('📅  Bitiş Tarihi','**'+bitiş+'**')
  .addBlankField()
  .addField('🌙 Kalan süre', moment().add(x, 'days').calendar())
  .setFooter('👉 Belkıs 👈')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
  message.member.send(sorgu)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['gold-sorgu', 'goldüyelik', 'goldsorgu'], 
  permLevel: 0
};

exports.help = {
  name: 'gold-s',
  description: 'taslak', 
  usage: 'gold-s'
};
