const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { 
let veri = await db.fetch(`botbakım`)
if(veri) {
 if(message.author.id !== "647167526022938635") {
 
 let codeming = new Discord.RichEmbed()
 .setTitle('Bakımdayız ❌')
 .setDescription('Bot,şu an kurucu tarafından bakıma alındı.')
 .addField('Bakım Sebebi:', veri)
 .setColor('RED')
message.channel.send(codeming).then(m => m.delete(10000))
 return
 } 
  
}


let data = db.fetch(`sunucuk_${message.guild.id}`)
if(data) {

//message.channel.send("**"+message.guild.name+"** Sunucusu,**"+data+"** sebebiyle kara-liste'ye alınmış.Sunucudan ayrılıyorum!")

const kara = new Discord.RichEmbed()
  .setTitle('Sunucu Kara Listede')
  .setDescription(`**Neden Sunucu Kara Listede dersen**: *${data}*`)
  .addField('**Kara Listeden sunucunu çıkarmak istiyorsan Destek sunucusuna gel**','*[TIKLA](https://discord.gg/s4hWSMd)*')
  .setFooter('Belkıs Sunucu Kara-Liste Sistemi')
  .setColor('RED')
message.channel.send(kara)
setTimeout(() => {

message.guild.leave()
}, 2500)
return;
}


    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
 