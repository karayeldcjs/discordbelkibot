const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async(client, message) => {


 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için yeterli yetkin yok!')

const hata = new Discord.RichEmbed()
.setTitle("Hata ❌")
.setDescription("Bir Rol etiketlemelisin")
.setColor("RANDOM")
.setFooter("Belkıs /help")
let rol = message.mentions.roles.first()

if (!rol) return message.channel.send(hata)
 
  db.set(`muteyetkili_${message.guild.id}`, rol.id)

  const embed = new Discord.RichEmbed()
.setTitle("✅ Başarılı ✅")
.setDescription(`Başarılı Bir şekilde ${rol} **Mute Yetkili** rolü olarak ayarlandı.`)
.setColor("RANDOM")
.setFooter("Belkıs /help") 
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['muteyetkilirol'],
  permLevel: 0
};

exports.help = {
  name: 'muteyetkilirol',
  description: 'Taslak',
  usage: 'Taslak'
};