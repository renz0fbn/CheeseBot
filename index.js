const {Client, Intents, Collection} = require('discord.js');
require('dotenv').config();

// import global variables and data
const config = require('./config.json');
const i18n = require('i18n');
const { join } = require('path');
const { setInterval } = require('timers');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.language = require('i18n');

client.language.configure({
    locales: ['en', 'es'],
    directory: join(__dirname, 'locales'),
    defaultLocale: 'es',
    retryInDefaultLocale: true,
    objectNotation: true,
    register: global,

    logWarnFn: function (message) {
        console.warn(message);
    },

    logErrorFn: function (message) {
        console.error(message);
    },

    missingKeyFn: function (locale, value) {
        return value;
    },

    mustacheConfig: {
        tags: ["{{","}}"],
        disable: false
    }
    
})

setInterval(updateStatus, 60000);

async function updateStatus(){
    const guildNum = client.guilds.cache.size;
    const memberNum = client.users.cache.size;

    await client.user.setActivity(`Servidores: ${guildNum} | Miembros: ${memberNum}`, { type: 'LISTENING' });
}

client.language.setLocale('es');


require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);

client.on('messageCreate', async (message) => {
    if(message.content == "!!createEmb"){
        const file = await message.attachments.first()?.url;
        try {
            message.channel.send('Reading the file! Fetching data...');
        
            // fetch the file from the external URL
            const response = await fetch(file);
        
            // if there was an error send a message with the status
            if (!response.ok)
              return message.channel.send(
                'There was an error with fetching the file:',
                response.statusText,
              );
        
            // take the response stream and read it to completion
            const text = await response.text();
        
            if (text) {
              message.channel.send(JSON.parse(text));
            }
          } catch (error) {
            console.log(error);
          }
    }
})

client.login(config.token);
// client.login(process.env.TOKEN);