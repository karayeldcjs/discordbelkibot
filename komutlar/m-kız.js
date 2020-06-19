const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let erkek = db.fetch(`kızrol_${message.guild.id}`);
  let yetkili = db.fetch(`yetkili_${message.guild.id}`);
  let alincak = db.fetch(`alincak_${message.guild.id}`);
  let tag = db.fetch(`tag_${message.guild.id}`);
  if (!yetkili) return message.reply("Kayıt Sisteminin Kadın Rol'ü Ayarlanmamış :(")
  if (!erkek) return message.reply("Kayıt Sisteminin yetkili rölü Ayarlanmamış :(")
  if (!alincak) return message.reply("Kayıt sisteminde Alınacak rol ayarlanmamış :(")
	if (!tag) return message.reply("Kayıt Sisteminde tag ayarlanmamış :(")
  if(!message.member.roles.has(yetkili)) return message.channel.send(`**\`Komutu Kullanman İçin Yetkin Yok kanka\` <@&${yetkili}> sahip olamısın. :(**`)
if(message.member.roles.has(yetkili)) {

let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]); 
  if (!user) return message.channel.send("Kayıt Edeceğin kişiyi etiketle")

const isim = args[1]
if(!isim) return message.channel.send("Bir İsim girmelisin")
const yas = args[2]
if(!yas) return message.channel.send("Bir yaş belirtmelisin")
 -
  user.addRole(erkek)
  user.addRole(erkek)
  user.setNickname(tag + " | " + isim + " " + yas)
  user.removeRole(alincak)
  const bit = new Discord.RichEmbed()
  .setTitle("Kayıt işlemi Başarılı")
  .setDescription(`**Kayıt Yapılan kullanıcı\n\n${user} (${user.id})\n\nKayıt Eden yetkili\n\n<@!${message.author.id}> (${message.author.id})\n\nBu kayıt İşleminde 1 kayıt puanı kazandın.**`)
  .setColor("RANDOM")
  .setFooter("Belkıs /help /destek")
  message.channel.send(bit)
  db.add(`puan_${message.guild.id}`, 1)

}
} 


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kadın', 'k'],
  permLevel: 0
};

exports.help = {
  name: 'kız',
  description: 'Taslak',
  usage: 'Taslak'
};