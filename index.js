const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("?");

client.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue le discord de la team Beast-gang' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


client.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


client.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("http://beast-gang.fr/")
        console.log("Une personne a demandé pour aller sur le site de la team.")
    }

});

client.login(cfg.token); //a garder en version desktop
client.login(token); //a garder en version heroku
