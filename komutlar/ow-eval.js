
//if ([ayarlar.token].includes(code)) return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
	if(message.author.id !== "647167526022938635") if(message.author.id !== "405506309446828042")  return
 
		try {
let codein = args.join(" ");
let code = eval(codein)
      
      if (codein.length < 1) return message.channel.send(`Lan Admin Gene İçtin demi mal bişiler yassana`)
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
  
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};

