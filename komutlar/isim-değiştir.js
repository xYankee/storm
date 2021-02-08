const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let pinkcode = message.mentions.members.first()
if (!pinkcode) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!pinkcode) return message.channel.send(`Değiştirilicek ismi girin.`)

pinkcode.setNickname(isim)
message.channel.send(`${pinkcode} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'v12 isim değiştir',
  description: 'isim-değiştir'
}
