const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {

    let silici = args[0]

    if (!silici) return message.reply("Bir Sayı Gir")
    if(isNaN(silici)) return message.reply("Sayı Gir")
if (silici > 150) return message.reply("En Fazla 150 Tane Silebilirsin")

message.channel.bulkDelete(silici)
message.channel.send("Başarılı").then(y => y.delete(5000))
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "sil",
  description: "CodEming By Muhammed",
  usage: "CodEming"
}; 