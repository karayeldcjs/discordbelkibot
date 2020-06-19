const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime El Hareketi Çekeceğimi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana El Hareketi Çekti!**')
    .setImage(`https://i.postimg.cc/x8L2tnLT/1562859600-b-D-BOj.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};