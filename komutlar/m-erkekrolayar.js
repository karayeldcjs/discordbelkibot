const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async(client, message) => {

 
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**\`Komutu Kullanman İçin Yetkin Yok kanka\`**")

const hata = new Discord.RichEmbed()
.setTitle("Hata ❌")
.setDescription("Bir Rol etiketlemelisin")
.setColor("RANDOM")
.setFooter("Belkıs /help")
let rol = message.mentions.roles.first()

if (!rol) return message.channel.send(hata)
 
  db.set(`erkekrol_${message.guild.id}`, rol.id)

  const embed = new Discord.RichEmbed()
.setTitle("Başarılı ✅")
.setDescription(`Başarılı Bir şekilde ${rol} erkek rolü olarak ayarlandı.`)
.setColor("RANDOM")
.setFooter("Belkıs /help") 
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['erkekrol'],
  permLevel: 0
};

exports.help = {
  name: 'erkek-rol',
  description: 'Taslak',
  usage: 'Taslak'
};