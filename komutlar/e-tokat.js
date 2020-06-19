const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Tokatlayacan lan**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana Tokat attı öldün kanka!**')
    .setImage(`https://media.tenor.com/images/7c9aae54150db96d78d71f08ec85eece/tenor.gif`)
   return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tokat-at'],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};