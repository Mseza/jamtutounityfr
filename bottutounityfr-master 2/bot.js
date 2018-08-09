const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  let guild = message.member.guild;
  let programmeur = guild.roles.find("name", 'Programmeurs');
  let graphiste = guild.roles.find("name", 'Graphistes');
  let modeliseur = guild.roles.find("name", 'Modeleurs');
  let soundDesigner = guild.roles.find("name", 'Sound Designers');
  let levelDesigner = guild.roles.find("name", 'Level Designers');

  let prefixe = message.content.split(" ")[0];

  if(message.channel.id === '375320406590226447'){

    if(prefixe.toLowerCase() === '!role') {

      let args = message.content.split(" ").slice(1).join(" ").toLowerCase();

      message.member.removeRole(programmeur);
      message.member.removeRole(graphiste);
      message.member.removeRole(modeliseur);
      message.member.removeRole(soundDesigner);
      message.member.removeRole(levelDesigner);

      if (args === 'programmeur') {
        message.member.addRole(programmeur);
        message.reply("vous êtes désormais un programmeur");
      }
      else if (args === 'graphiste') {
        message.member.addRole(graphiste);
        message.reply("vous êtes désormais un graphiste");
      }
      else if (args === 'modeleur') {
        message.member.addRole(modeliseur);
        message.reply("vous êtes désormais un modeleur");
      }
      else if (args === 'sound designer') {
        message.member.addRole(soundDesigner);
        message.reply("vous êtes désormais un sound designer");
      }
      else if (args === 'level designer') {
        message.member.addRole(levelDesigner);
        message.reply("vous êtes désormais un level designer");
      }
      else {
        message.reply("vous avez mentionné un rôle non valide")
      }

    }

  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
