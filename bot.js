const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const http = require("http");
const express = require("express");
const app = express();
/*app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
//app.listen(process.env.PORT);
app.listen('9000')
setInterval(() => {
  http.get(`http://belkis-devv.glitch.me/`);
}, 280000);*/

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.on("message", codeming => {
  var miran = client.channels.get("712400709437489173");
  if (codeming.channel.type === "dm") {
    if (codeming.author.id === client.user.id) return;
    const berkcim = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${codeming.author.avatarURL}`)
      .addField("Gönderen Kişi", codeming.author.tag)
      .addField("Gönderen Kişinin ID", codeming.author.id)
      .addField("Gönderilen Mesaj", codeming.content);

    miran.send(berkcim);
  }
  if (codeming.channel.bot) return;
});




client.on("message", msg => {
  const reklama = db.fetch(`linkK_${msg.channel.id}`)
  if (!reklama) return
  var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
    
   msg.delete()
    const Embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor("Belkıs", client.user.avatarURL)
    .setDescription(`${msg.author} Reklam Yasak Bunu Bilmiyormusun!`)
    msg.channel.send(Embed).then(sil => sil.delete(3000))
  }
})

client.on("message", msg => {
  const reklama = db.fetch(`reklamK_${msg.channel.id}`)
  if (!reklama) return
    const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
  if (kelime.some(reklam => msg.content.includes(reklam))) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
    
   msg.delete()
    const Embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor("Belkıs", client.user.avatarURL)
    .setDescription(`${msg.author} Reklam Yasak Bunu Bilmiyormusun!`)
    msg.channel.send(Embed).then(sil => sil.delete(3000))
  }
})

client.on("guildCreate", guild => {
  let codeming1 = client.channels.get("721465148824617033")

 const codeming = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("GREEN")
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
.addField('Toplam Sunucu && Kullanıcı', `\`${client.guilds.size} ${client.users.size}\``)
codeming1.send(codeming)
});

client.on("guildDelete", guild => {
  let codeming2 = client.channels.get("721465148824617033")

 const codeming3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("RED")
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
.addField('Toplam Sunucu && Kullanıcı', `\`${client.guilds.size}\` Sunucuya \` ${client.users.size}\` adet kullanıcıya hizmette`)
codeming2.send(codeming3)
});




client.on("guildMemberAdd", member => {
  let acik = db.fetch(`kayıtacik_${member.guild.id}`, 'acik')
  let kayıt = db.fetch(`kayıtk_${member.guild.id}`)
  let tag = db.fetch(`tag_${member.guild.id}`)
    if(acik) {
  let user = client.users.get(member.id);
  require("moment-duration-format");
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  var kontrol;
  if (kurulus < 1296000000)
    kontrol =
      "<a:noktaag:706985498589265981> **__Bu Hesap Güvenilir Değil__** <a:unneem:706985376497270785>";
  if (kurulus > 1296000000)
    kontrol =
      "<a:noktaag:706985498589265981> **__Bu Hesap Güvenilir Gözüküyor__** <a:tihg:705760657248878624>";
  moment.locale("tr");
  let siyah = client.channels.get(kayıt);
  siyah.send("**<a:qwqwqqw:706985552188276786> Hoşgeldin! **" + member + ` (\`${member.id}\`) Seninle __` + member.guild.memberCount + `__ Kişiyiz \n\n<a:kanatkus:706985525126496376> Sunucuya Kayıt Olmak Ses Odalarından Birine Geçebilirsiniz \n\n<a:yildizim:706985430049882123> \`${tag}\` Alarak Bize Destek Olabilirsin \n\n<a:kilitry:706985464120213666> Hesabın Oluşturulma Tarihi: ` + moment(member.user.createdAt).format(`YYYY **__DD MMMM dddd (hh:mm:ss)__**`) + " \n\n" + kontrol + " \n\n", new Discord.Attachment("https://cdn.discordapp.com/attachments/716332188190375946/716388814704214046/3-Afyonkarahisar-Kocatepe-aniti-iterated.jpg")
)
    }
});





client.on("guildMemberAdd", async member => {
  let guild = member.guild;
  let user = client.users.get(member.id);
  if (guild.id !== "721423478426828800") return;

  let embed = new Discord.RichEmbed()
    .setTitle("Hoşgeldin!")
    .setAuthor(user.username, user.avatarURL)
    .setDescription(
      "Belkıs resmi destek sunucusuna Hoşgeldiniz."
    )
    .setFooter("EĞLENMENE BAK!", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(guild.iconURL)
    .setColor("#D608FF");
  user.send(embed);
});

client.on("channelDelete", async channel => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id === client.user.id) return;
    if (entry.executor.id === "" & "") return;
    channel.guild.createChannel(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.RichEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)

      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)

      .setColor("BLACK");
    client.channels.get(kanal).send(embed);client.on("channelCreate", async channel => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.get(kanal).send(embed);
    })})









client.on('roleDelete', async role => {
  let rolkoruma = db.fetch(`codepack.rolkoruma_${role.guild.id}`)
  if(!rolkoruma) return; 
  let denetim = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'})
  let yetkili = role.guild.members.get(denetim.entries.first().executor.id);
  if(yetkili.bot) return;
  role.guild.createRole({name: role.name, color: role.color, hoist: role.hoist, position: role.position, permissions: role.permissions, mentionable: role.mentionable}).then(rol => {
 })
}) 


















client.login(ayarlar.token);

