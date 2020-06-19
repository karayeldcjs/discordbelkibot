const Discord = require('discord.js');


exports.run = async (client,message, args) => { 
  
let member = message.guild.member(
    message.mentions.users.array()[0] || message.guild.members.get(args[0])
  );
  let member2 = message.guild.member(
    message.mentions.users.array()[1] || message.guild.members.get(args[1])
  );
  var s = message.author;
  if (member2) {
    var s = member2.user;
  }
  if (!member) {
    const yasin = new Discord.RichEmbed()
      .setDescription(`Bir Kişi Etiketlemelisin.`)
      .setAuthor(" Hata Var!")
      .setColor("RED")
      .setTimestamp();
    message.channel.send({ yasin });
    return;
  }
  var CodEmingask = Math.floor(Math.random() * 101);
  var kalp = "";
  var akalp = "";
  if (Math.floor(Math.round(CodEmingask / 10) * 10) >= 10) {
    var c = 0;
    for (var i = 0; i < Math.floor(Math.round(CodEmingask / 10)); i++) {
      kalp += "👊";
      c++;
    }
    for (var x = c; x < 10; x++) {
      akalp += `🖤`;
    }
  } else {
    var kalp = "🖤";
    var akalp = "🖤🖤🖤🖤🖤🖤🖤🖤🖤";
  }
  var yorum = `Lan Sizin gibi arkadaşlar yok hacıı`;
  if (CodEmingask < 80) {
    var yorum = "Ulan yaa iyi arksınız kankalar";
  }
  if (CodEmingask < 60) {
    var yorum = "Hadi Azcık Zorla Be.";
  }
  if (CodEmingask < 40) {
    var yorum = "Bak bu arkadaşım dediğin bebe seni hiç sevmiyooo";
  }
  if (CodEmingask < 20) {
    var yorum = "Banla şunu aaq";
  }
  const baroo = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} İle ${s.tag} Arasındaki Arkadaşlık Sonucu.`)
    .setDescription(`Arkadaşlık Yüzdesi: ${CodEmingask}\n${kalp}${akalp}\n\n${yorum}`)
    .setColor("RANDOM")
    .setTimestamp();
  
const selin = new Discord.RichEmbed()
.setAuthor(`${member.user.tag} 👊 ${s.tag}`)
.setDescription('**Ölçüyorum...**')
.setColor("PURPLE")

message.channel.send(selin).then(codeming => {
setTimeout(() => {
codeming.edit(baroo)
}, 10000)

  });


} 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ark","arkadaş"],
  permLevel: 0
};
exports.help = {
  name: "arkadaşlık",
  description: "İ.",
  usag:""
};
