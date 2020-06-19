const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

  
  let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author
   
  let random = ["https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif","https://49.media.tumblr.com/222f7395f274c910a0d34562a2be01fd/tumblr_nxm5cltgCv1rfx24fo1_500.gif","https://data.whicdn.com/images/52693776/original.gif","http://p.favim.com/orig/2018/08/31/cry-gif-anime-Favim.com-6203281.gif","https://media3.giphy.com/media/I2wJw3hlGM7M4/giphy.gif","https://thumbs.gfycat.com/AcclaimedOilyAcornbarnacle-max-1mb.gif","https://media1.tenor.com/images/f599a1ef6bc94b0dad2f87a93683fe76/tenor.gif?itemid=5947375","http://s3.favim.com/orig/151216/anime-anime-gif-anime-girl-black-and-white-Favim.com-3771853.gif","https://78.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif"]
  
  let gif = (random[Math.floor(Math.random() * random.length)])
  if(user.id === message.author.id) {
let seviyor = new Discord.RichEmbed()
  .setTitle("Kendini ağlattı..")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Görünüşe göre üzgün "+user+". Kimse nedenini bilmiyor?")
  .setFooter('Belkıs Eğlence Komutları',message.author.avatarURL)
  .setImage(gif)
  .setTimestamp()
  .setColor('BLUE')    
  message.channel.send(seviyor)
  return
  }
 

  
 let seviyor = new Discord.RichEmbed()
  .setTitle("Üzgün ​​bir insan çok kaybeder.")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Görünüşe göre üzgün "+user+". Kimse Nedenini Bilmiyor?")
  .setFooter('Belkıs Eğlence Komutları',message.author.avatarURL)
  .setImage(gif)
  .setTimestamp()
  .setColor('BLUE')    
  message.channel.send(seviyor) 
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['cry'], 
  permLevel: 0
};

exports.help = {
  name: 'ağla',
  description: 'taslak', 
  usage: 'cry'
};
