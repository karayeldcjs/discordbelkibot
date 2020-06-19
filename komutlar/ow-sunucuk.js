const Discord = require('discord.js');
const db = require('quick.db')
//const ayarlar = require('./ayarlar.json')

exports.run =  async(client, codeming, args) => { 
  
if(codeming.author.id !== '647167526022938635') return codeming.channel.send(":x: Bu komutu sadece bot sahibi kullanabilir.")  

let sunucu = args[0]
let sebep = args.slice(1).join(" ")

if(!sunucu) return codeming.channel.send("Lütfen bir sunucu ID'si gir. `/sunucuk 1024615686 Komut spamı.`")

if(!sebep) sebep = "Neden Belirtilmemiş."
let kontrol = client.guilds.get(sunucu)
let durum;

if(!kontrol) durum = "**"+sunucu+"** ID'sine sahip sunucu"
else durum = "**"+sunucu.name+"** isimli sunucu"


let data = await db.fetch(`sunucuk_${sunucu}`)

if(data) {

codeming.channel.send(data+" kara listeden **çıkarıldı**")
db.delete(`sunucuk_${sunucu}`)

} else {

codeming.channel.send(sunucu+" İDli sunucu kara listeye **"+sebep+"** nedeniyle **alındı**")
db.set(`sunucuk_${sunucu}`, sebep)

}
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sunucuk'], 
  permLevel: 0
};

exports.help = {
  name: 'sunucukara-liste',
  description: 'taslak', 
  usage: 'kara-liste'
};



