const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const pinkcode = new Discord.MessageEmbed() 
                            
.setTitle("Davet Komutu")
.setDescription("**Botun Davet Linki :** [Davet Et](BOT DAVET LİNK)\n**Botun Destek Sunucusu :** [Katıl](DESTEK SUNUCUSU LİNK)")
.setColor("GREEN")

return message.channel.send(pinkcode)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};