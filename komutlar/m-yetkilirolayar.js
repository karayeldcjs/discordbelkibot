const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message) => {


if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')

const hata = new Discord.RichEmbed()
.setTitle("Hata ❌")
.setDescription("Bir Rol etiketlemelisin")
.setColor("RANDOM")
.setFooter("Belkıs /help")

let k = message.mentions.roles.first()

if (!k) return message.channel.send(hata)
 
  db.set(`yetkili_${message.guild.id}`, k.id)

  const embed = new Discord.RichEmbed()
.setTitle("Başarılı ✅")
.setDescription(`Başarılı Bir şekilde ${k} Yetkili rolü olarak ayarlandı.`)
.setColor("RANDOM")
.setFooter("Belkıs /help") 
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilirol'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-rol',
  description: 'Taslak',
  usage: 'Taslak'
};