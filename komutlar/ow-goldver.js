const Discord = require('discord.js');
const ms = require("ms");
const db = require('quick.db')
const moment = require("moment")
exports.run = (client, message, args) => { 
  
  if(message.author.id !== '647167526022938635' && "647167526022938635") return message.reply("Ownermisin Lan sen git işine")  

  let gün = args[1]
  let kullanıcı = message.mentions.users.first() || client.users.get(args[0])
  
if(!kullanıcı) return message.channel.send('Kime **Gold Üyelik** vereceğini belirtmelisin. \n\n `/gold-ver <id> <gün sayısı>`') 

if(kullanıcı.bot) return message.channel.send('Bir bota **Gold Üyelik** vermezsin.')
  
if(!gün) return message.channel.send(kullanıcı +' Adlı kullanıcıya ne kadar gün gold üyelik vereceğini yazmalısın. \n\n `/gold-ver <kullanıcı> || <id> <gün sayısı>`')   

if(isNaN(args[1])) return message.channel.send('Bir sayı değeri girmelisin.')

if(gün < 0) return message.channel.send('Verilecek **Gold Üyelik** "`0`" dan yüksek olmalı.')  
 
message.channel.send(kullanıcı + ' İçin **Gold Üyelik** Aktif edildi.! \n\n Süre: `'+gün+'` Gün')

let başlangıç;
başlangıç = moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss')
let bitiş;
bitiş = moment().add(gün, 'days').format('DD/MM/YYYY | HH:mm:ss')
let sil; 
sil = moment().add(gün, 'days').format('DD/MM/YYYY | HH')  
  
let gold = new Discord.RichEmbed()
  .setTitle('Altın Üyeliğiniz başlatıldı!')
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL)
  .setDescription('🌹 Gold üyeliğiniz artık başladı. Botta size verilen özel koşulları kullanabilirsiniz.!')
  .addBlankField()
  .addField('🕐 Başlangıç Tarihi', moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss'))
  .addField('📅 Bitiş Tarihi', moment().add(gün, 'days').format('DD/MM/YYYY | HH:mm:ss'))
  .setFooter('Manage All')
  .setTimestamp()
  .setThumbnail(kullanıcı.avatarURL)
  .setColor('RED')
  kullanıcı.send(gold)
  
db.set(`gold_${kullanıcı.id}`, 'aktif')
db.set(`goldsure_${kullanıcı.id}`, gün)
db.set(`baslangic_${kullanıcı.id}`, Date.now())
///  
db.set(`bsorgu_${kullanıcı.id}`, başlangıç)
db.set(`bitissorgu_${kullanıcı.id}`, bitiş)
///  
db.set(`goldsilme_${kullanıcı.id}`, sil)  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["goldver"], 
  permLevel: 0
};

exports.help = {
  name: 'gold-ver',
  description: 'taslak', 
  usage: 'gold-ver'
};
