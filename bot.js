const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  let guild = message.member.guild;
  let jamParticipant = guild.roles.find("name", 'JamParticipant');

  if(message.channel.id === '477136958188158996'){

    if(message.content = '!jeparticipe'){
        message.member.addRole(jamParticipant);
        message.reply("vous êtes désormais inscrit à la GameJam");
      }

    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
