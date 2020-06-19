const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  
   if(message.author.id !== "647167526022938635")  if(message.author.id !== "647167526022938635") return 
  
  
 let sunucular = client.guilds.map(a => a.id + " | " + a.name).join('\n');
message.channel.send(sunucular, {code: "xl", split: true}); 
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['server-list'], 
  permLevel: 0
};

exports.help = {
  name: 'serverlist',
  description: 'taslak', 
  usage: 's-list'
};

