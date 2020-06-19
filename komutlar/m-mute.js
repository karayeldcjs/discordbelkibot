const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
exports.run = async(client, message, args) => {
  
  let mutelog = db.fetch(`mutelog_${message.guild.id}`);
  let muterol = db.fetch(`muterol_${message.guild.id}`);
  let muteyetkili = db.fetch(`muteyetkili_${message.guild.id}`);
  let log = client.channels.get(mutelog)
  if (!mutelog) return message.reply("Mute Sisteminin Log'u Ayarlanmamış /mutesistemi")
  if (!muterol) return message.reply("Mute Sisteminin Rol'ü Ayarlanmamış /mutesistemi")
  if (!muteyetkili) return message.reply("Ban Sisteminin Yetkili Rol'ü Ayarlanmamış /mutesistemi")

 if(!message.member.roles.has(muteyetkili)) return message.reply("Mute Atma rolün yok!")
    
  if (!message.member.roles.has(muteyetkili)) {
  } else {
    let muted =
      message.mentions.members.first() ||
      message.guild.members.find(c => c.id === args[0]);
    if (!muted) {
      message.channel.send("Lütfen susturulacak üyeyi etiketleyiniz.");
      } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          message.channel.send("Lütfen bir zaman dilimi belirt.");
        } else {
          let sebep = args.splice(2, args.length).join(" ");
          
      let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " gün");
            muted.addRole(muterol);
            const embed = new Discord.RichEmbed()
            .setColor('BLUE')
            .setDescription(`**${muted.user.tag}** adlı kullanıcı susturuldu \n \n **Susturan kişi:** <@${message.author.id}> \n **Süre:** \`${vakit}\``)
            log.send(embed)
            message.channel.send(`<#${mutelog}> kanalına bilgileri gönderdim`)
     
          setTimeout(async function() {
            muted.removeRole(muterol)
            log.send("Susturulma cezası, sürenin bitmesi sebebiyle kaldırıldı.")
          }, ms(mutezaman));
        }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur', 'chatmute', 'tempmute', 'sürelimute'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'taslak',
  usage: 'ban'
};