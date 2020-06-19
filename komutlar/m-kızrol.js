const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async(client, message) => {
	
  
 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**\`Komutu Kullanman İçin Yetkin Yok kanka\`**")

const hata = new Discord.RichEmbed()
.setTitle("Hata ❌")
.setDescription("Bir Rol etiketlemelisin")
.setColor("RANDOM")
.setFooter("Belkıs /help")
let rool = message.mentions.roles.first()

if (!rool) return message.channel.send(hata)
 
  

  const embed = new Discord.RichEmbed()
.setTitle("Başarılı ✅")
.setDescription(`Başarılı Bir şekilde ${rool} Kız rolü olarak ayarlandı.`)
.setColor("RANDOM")
.setFooter("Belkıs /help") 
  
message.channel.send(embed)
  db.set(`kızrol_${message.guild.id}`, rool.id)
  

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kızrol'],
  permLevel: 0
};

exports.help = {
  name: 'kız-rol',
  description: 'Taslak',
  usage: 'Taslak'
};