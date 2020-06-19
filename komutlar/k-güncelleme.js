const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
let güncelleme = await db.fetch(`güncelleme`)  
let süre = await db.fetch(`güncellemesüre`)    
let gyapıcı = await db.fetch(`güncellemeyapımcı`)

let egüncelleme = await db.fetch(`egüncelleme`)  
let esüre = await db.fetch(`egüncellemesüre`)    
let egyapıcı = await db.fetch(`egüncellemeyapımcı`)  
 


let güncellemeler = new Discord.RichEmbed()    
.setTitle('🔱 Güncellemeler')    
  .setDescription('**Belkıs** güncellemele kayıtlarını aşağıdan görebilirsin. Herhangi bir sorun hata olursa. /bug <Hata>')
  .addBlankField()
  .addField('🔔 | Son Güncelleme', güncelleme + '\n\n **Güncelleme Tarihi** » '+süre+'\n\n **Güncelleme Yapımcısı** » <@!'+gyapıcı+'>')
  .addBlankField()
.addField('🔕 | Önceki Güncelleme', egüncelleme + '\n\n **Güncelleme Tarihi** » '+esüre+'\n\n **Güncelleme Yapımcısı** » <@!'+egyapıcı+'>')
.addBlankField()
  .addField(`:star: | Linkler`, `[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=716636363662819369&scope=bot&permissions=8)`, )
.setFooter('Belkıs', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
message.channel.send(güncellemeler)
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['update'], 
  permLevel: 0
};

exports.help = {
  name: 'güncelleme',
  description: 'taslak', 
  usage: 'update'
};
