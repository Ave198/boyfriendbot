const Discord = require('discord.js')
const cevaplar = [
  'post the last image on your gallery',
  'post the last selfie of you',
  'ping the person that gets most annoyed by pings',
  'film yourself dabing',
  'sigh a black lives matter change.org',
  'film yourself singing as high as you can',
  'send your 5 most recent emojis',
  'invite me to your discord server ;) `-invite`',
  'change your username to `boyfriendbot\'s s/o`',
  'send a random person a dm saying "have a good day"',
  'send the first image in yoru gallery',
  'send your desktop wallpaper',
  'make ur pfp this for an hour https://media.discordapp.net/attachments/693242531575758889/724890294226649138/unknown.png',
  'send your favorite song',
  'show your search history',
  'turn on discords light mode for an hour',
  'ask a random person for free nitro',
  'i dare you to tell me a dad joke',
  'say the worse word you know',
  'talk like an f-boy for an hour',
  'run the -kiss command on someone `-kiss @<user>`',
  'send your favorite meme',
  'send a random photo from your camera roll',
  'tell me a story that you know from memory (fairytail or sumn like that yk?)',
  'baby whats the last thing u searched 4 on ur phone?',
  'who do u have a crush on?',
  'have you ever walked into a wall?',
  'have you ever done ***it** :flushed: ',
  'lol do you cover your eyes during the scary parts of movies?',
  'whats ur worse habit?',
  'omg bitchh do you sing in the shower?',
  'have u ever peed urself :no_mouth: ',
  'do you have a stuffed animal?',
  'have you ever given someone a fake number / answer?',
  'what color is your underwear rn? :face_with_monocle: ',
  'have you ever farted and blamed it on someone else?',
  'do you like ur mom or dad better?',
  'whats ur biggest pet peeve?',
  'who in this chat is the worse person to date',
  'have you ever done an @/everyone to piss people off?',
  'who in this chat would you swith lives with?',
  'if yuh was reborn what year would you be born in?',
  'whats a childish thing you still do-',
  'do you still have a library book you never returned?',
  'hav u ever eaten sumn off the floor?',
  'do you eat with ur fingers? :nauseated_face: ',
  'do you have a diary?',
  'whats something that you have never told anyone?',
  'have you ever had lice? lol',
  'have u ever asked someone out?',
  'have u ever sent someone the wrong text? i have :pensive:',
];
exports.run = function (client, message, args) {
  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  message.channel.send(cevap)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'truthordare',
  description: 'truth or dare command',
  usage: '-truthordare'
};