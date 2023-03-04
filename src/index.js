 const {Client, IntentsBitField} = require('discord.js');

 const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
 });

client.on('ready',(c) => {
    console.log(`  ${c.user.tag} is online.`);
});


client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    }
    if(message.content === 'hello') {
        message.reply('hello');
    }
});

client.login('MTA4MTY4OTM4MDcwNTU0NjI2MQ.GBKyZl.z9MNJ7i-vYFrEjaS55DaWyzpN0IEivOcI8MSjE');