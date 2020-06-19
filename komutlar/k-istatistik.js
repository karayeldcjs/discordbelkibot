const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message) => {
  
        const embed = new Discord.RichEmbed()
            .addField("🚀 Version", "0.1", true)

            .addField("📶 Toplam Sunucu Sayısı", client.guilds.size, true)

            .addField("👦 Toplam Kullanıcı Sayısı", client.users.size, true)
            
            .addField("📂 Toplam Kanal Sayısı", client.channels.size, true)
            
            .addField("⏰ Çalışma Süresi", moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]'), true)

            .addField("📚 Kitaplık Türü", "discord.js", true)
        
            .setColor('GOLD')
        
            .setFooter(`${client.user.username} - Tüm Hakları Saklıdır!`, client.user.avatarURL)
        return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};