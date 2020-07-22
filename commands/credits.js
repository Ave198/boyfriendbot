const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setAuthor('Boyfriend Bot Contributors')
    .addField(':thinking: What is this?', '*This is a list of people who helped to develop boyfriend bot and make it what it is today.*') 
    .addField(':desktop: Develpment Contributors', '*robbie#2544 (Creator), Max Thakur#0831 (Rewritten for D.js v12)*')    
    .addField(':pencil: Suggestion Contributors:', '<@329887126831497216>, *@🍼ʙᴀʙʏ🍼#5501*, <@551874406260015124>, <@315534526988156928>, <@530279594016636938>, <@647981740568084490>, <@694463477942714418>')
    .addField(':selfie: Boyfriend Bot Profile Picture:', '*Tony Lopez (@tony_lopez IG)*')
    .addField(':sparkles: Help Support the Bot!', '*Feel free to vote for the bot to help us get noticed by more people! https://bit.ly/BoyfriendVote*')
    .setTimestamp()
    .setFooter("Requested by " + msg.author.tag, msg.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 2048
    }))
  msg.channel.send(embed);


};