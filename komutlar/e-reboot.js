const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

     message.reply('Beni gerçekten yeniden başlatmak istiyor musun? \n\n `evet` **/** `hayır`').then(a => {
  
    let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "hayır") {
     a.delete()
     message.reply('Ne çabuk pes ettin?')
  return
   }
     
    
    if(collected.first().content === "evet") {
     message.reply('Beni inanılmaz imkansız bir şekilde yeniden mi başlatmak istiyorsun? \n\n `evet inanılmaz!` **/** `pes ettim`').then(a => {
       message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
         if(collected.first().content === "pes ettim") {
     a.delete()
     message.reply("Pes etsende buraya kadar gelmen de başarıdır!")
  return
   }   
          if(collected.first().content === "evet inanılmaz!") {
     a.delete()
      message.reply('beni yeniden başlatabilceğine inanıyor musun? \n\n `Evet kendime güveniyorum!` **/** `Sen beni mi kandırıyorsun`').then(a => {
     
 message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
       
          
          if(collected.first().content === "Evet kendime güveniyorum!") {
    a.delete()
    message.reply("Tamam,kendine bu kadar güvenmene ve durmadan beni yeniden başlatmaya çalışmanı sevdim ancak şu an kendimi yeniden başlatamayacak kadar yorgunum..")       
        }
              if(collected.first().content === "Sen beni mi kandırıyorsun") {
    a.delete()
    message.reply("**EVET!** XD :)")       
              }
        })
              })
}
       })
     })
    }
  })
  })
  return
  
  message.reply('Beni gerçekten yeniden başlatmak istiyor musun? \n\n `evet` **/** `hayır`').then(a => {
  
    let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "hayır") {
     a.delete()
     message.reply('ne kadar çabuk pes ettin?')
  return
   }
     
    
    if(collected.first().content === "evet") {
     message.reply('Beni inanılmaz derecede imkansız bir şekilde yeniden başlatmak istiyor musun?? \n\n `evet inanılmaz` **/** `pes ettim`').then(a => {
       message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
         if(collected.first().content === "pes ettim") {
     a.delete()
     message.reply("En azından biraz denedin, bu bir başarı!")
  return
   }   
          if(collected.first().content === "evet inanılmaz") {
     a.delete()
      message.reply('bunu yapabileceğine inanıyor musun? \n\n `Evet Kendime Güveniyorum` **/** `Sen Beni Kandırıyorsun`').then(a => {
     
 message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
       
          
          if(collected.first().content === "Evet Kendime Güveniyorum") {
    a.delete()
    message.reply("Bak, çok kendine güvendiğine sevindim, ama şimdi yapmak için çok yorgunum, belki sonra?")       
        }
              if(collected.first().content === "Sen Beni Kandırıyorsun") {
    a.delete()
    message.reply("**Evet AQ Ne sandın!** XD")       
              }
        })
              })
}
       })
     })
    }
  })
  })

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'taslak', 
  usage: 'reboot'
};
