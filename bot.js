const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  let guild = message.member.guild;
  let jamParticipant = guild.roles.find("name", 'Participant');

  if(message.channel.id === '477153349528191033'){

    if(message.content === '!jeparticipe'){
        message.member.addRole(jamParticipant);
        message.reply("vous êtes désormais inscrit à la GameJam");
      }
    
    if(message.content === '!test'){
        //message.member.addRole(jamParticipant);
        message.reply("Ce test fonctionne");
      }

    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
