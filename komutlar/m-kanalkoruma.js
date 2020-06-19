const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
if (args[0] === 'aç') {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "/";
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const f = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen log kanalını etiketleyiniz!`);
      message.channel.send(f);
      return;
    }
    db.set(`kanalk_${message.guild.id}`, kanal.id);
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Kanal koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
}
    if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`);
   const d = new Discord.RichEmbed()
      .setColor("GREEN")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Kanal koruma Sistemi kapandı`);
    message.channel.send(d);

}


  };



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel-protection", 'kanalkoruma'],
  permLevel: 3
}
exports.help = {
  name: 'kkoruma',
  category: "Mod",
  description: ""
}